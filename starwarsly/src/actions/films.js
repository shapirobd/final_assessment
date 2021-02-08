import axios from "axios";
import { LOAD_FILM } from "./types";

/**
 * "thunk" action creator that we can dispatch.
 *
 * Accepts 1 argument:
 * - id: the id of the film we are requesting
 *
 * Performs async operation to retrieve information on a film, including:
 * - title
 * - director
 * - openingCrawl
 * - characters
 * - planets
 *
 * Puts this info into an object and passes it to the gotFilm action creator
 * (so it can be used as the payload of the action), and then dispatches that action
 * to add the film to the store.
 */
function getFilmFromAPI(id) {
	return async function (dispatch) {
		const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
		let {
			title: name,
			director,
			opening_crawl: openingCrawl,
			characters,
			planets,
		} = res.data;

		characters = characters.map((url) => url.match(/\d+/)[0]);
		planets = planets.map((url) => url.match(/\d+/)[0]);

		const film = { id, name, director, openingCrawl, characters, planets };
		dispatch(gotFilm(film));
	};
}

/**
 * Accepts 1 argument:
 * - film: an object containing information on a film
 *
 * returns an action object with the following info:
 * - type: LOAD_FILM
 * - payload: film
 */
function gotFilm(film) {
	return { type: LOAD_FILM, payload: film };
}

export { getFilmFromAPI };
