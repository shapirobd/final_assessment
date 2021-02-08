import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

/**
 * Film component that displays information on a single planet, including:
 * - the person's name
 * - the person's gneder
 * - the person's birth year
 * - the planet this person is from (Link that takes you to route for that planet's details)
 * - the films this person is featured in (via Sublist component)
 */
function Person() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const person = useSelector((st) => st.people[id]);
	const planetState = useSelector((st) => st.planets);
	const filmState = useSelector((st) => st.films);
	const missing = !person;

	useEffect(
		/**
		 * If this person is not found within the store, get their information from an API call
		 * and dispatch an action to add them to the store.
		 */
		function () {
			if (missing) {
				dispatch(getPersonFromAPI(id));
			}
		},
		[id, missing, dispatch]
	);

	if (missing) return "loading...";

	const hw = person.homeworld;

	/**
	 * Object containing information on this person's home planet
	 */
	const homeworld = {
		id: hw,
		url: `/planets/${hw}`,
		display: planetState[hw] ? planetState[hw].name : "Unknown",
	};

	/**
	 * Array of films that feature this person
	 */
	const films = person.films.map((fid) => ({
		id: fid,
		url: `/films/${fid}`,
		display: filmState[fid] ? filmState[fid].name : "Unknown",
	}));

	return (
		<div>
			<h1 className="my-3">
				{person.name}
				<small className="text-muted float-right">{person.id}</small>
			</h1>

			<p>
				<b>Gender: </b>
				{person.gender}
			</p>
			<p>
				<b>Birth Year: </b>
				{person.birthYear}
			</p>
			<p>
				<b>Homeworld: </b>
				<Link to={homeworld.url}>{homeworld.display}</Link>
			</p>

			<Sublist title="Films" items={films} />
		</div>
	);
}

export default Person;
