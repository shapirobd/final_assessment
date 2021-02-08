import axios from "axios";
import { LOAD_PLANET } from "./types";

/**
 * "thunk" action creator that we can dispatch.
 *
 * Accepts 1 argument:
 * - id: the id of the planet we are requesting
 *
 * Performs async operation to retrieve information on a planet, including:
 * - name
 * - population
 * - climate
 * - residents
 * - films
 *
 * Puts this info into an object and passes it to the gotPlanet action creator
 * (so it can be used as the payload of the action), and then dispatches that action
 * to add the planet to the store.
 */
function getPlanetFromAPI(id) {
	return async function (dispatch) {
		const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
		let { name, population, climate, residents, films } = res.data;
		residents = residents.map((url) => url.match(/\d+/)[0]);
		films = films.map((url) => url.match(/\d+/)[0]);

		const planet = { id, name, population, climate, residents, films };
		dispatch(gotPlanet(planet));
	};
}

/**
 * Accepts 1 argument:
 * - planet: an object containing information on a planet
 *
 * returns an action object with the following info:
 * - type: LOAD_PLANET
 * - payload: planet
 */
function gotPlanet(planet) {
	return { type: LOAD_PLANET, payload: planet };
}

export { getPlanetFromAPI };
