import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";

/**
 * Film component that displays information on a single planet, including:
 * - the planet's name
 * - the planet's climate
 * - the planet's population
 * - the planet's residents (via Sublist component)
 * - the films this planet is featured in (via Sublist component)
 */
function Planet() {
	const { id } = useParams();
	const planet = useSelector((st) => st.planets[id]);
	const filmState = useSelector((st) => st.films);
	const characterState = useSelector((st) => st.people);
	const dispatch = useDispatch();
	const missing = !planet;

	useEffect(
		/**
		 * If this planet is not found within the store, get its information from an API call
		 * and dispatch an action to add it to the store.
		 */
		function () {
			if (missing) {
				dispatch(getPlanetFromAPI(id));
			}
		},
		[missing, id, dispatch]
	);

	if (missing) return "loading...";

	/**
	 * Array of films that feature this planet
	 */
	const films = planet.films.map((fid) => ({
		id: fid,
		url: `/films/${fid}`,
		display: filmState[fid] ? filmState[fid].name : "Unknown",
	}));

	/**
	 * Array of people who live on this planet
	 */
	const residents = planet.residents.map((pid) => ({
		id: pid,
		url: `/people/${pid}`,
		display: characterState[pid] ? characterState[pid].name : "Unknown",
	}));

	return (
		<div>
			<h1 className="mt-3 mb-3">
				{planet.name}
				<small className="text-muted float-right">{id}</small>
			</h1>

			<p>
				<b>Climate: </b>
				{planet.climate}
			</p>
			<p>
				<b>Population: </b>
				{planet.population}
			</p>

			<Sublist title="People" items={residents} />
			<Sublist title="Films" items={films} />
		</div>
	);
}

export default Planet;
