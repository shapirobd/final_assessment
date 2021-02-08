import axios from "axios";
import { LOAD_PERSON } from "./types";

/**
 * "thunk" action creator that we can dispatch.
 *
 * Accepts 1 argument:
 * - id: the id of the person we are requesting
 *
 * Performs async operation to retrieve information on a person, including:
 * - name
 * - gender
 * - birthYear
 * - homeworld
 * - films
 *
 * Puts this info into an object and passes it to the gotPerson action creator
 * (so it can be used as the payload of the action), and then dispatches that action
 * to add the person to the store.
 */
function getPersonFromAPI(id) {
	return async function (dispatch) {
		const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
		let { name, gender, birth_year: birthYear, homeworld, films } = res.data;

		films = films.map((url) => url.match(/\d+/)[0]);
		homeworld = homeworld.match(/\d+/)[0];

		const person = { id, name, gender, birthYear, homeworld, films };
		dispatch(gotPerson(person));
	};
}

/**
 * Accepts 1 argument:
 * - person: an object containing information on a person
 *
 * returns an action object with the following info:
 * - type: LOAD_PERSON
 * - payload: person
 */
function gotPerson(person) {
	return { type: LOAD_PERSON, payload: person };
}

export { getPersonFromAPI };
