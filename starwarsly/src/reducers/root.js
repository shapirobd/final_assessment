import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";

/**
 * The root reducer that combines the films, people and planets reducers.
 */
export default combineReducers({
	films,
	planets,
	people,
});
