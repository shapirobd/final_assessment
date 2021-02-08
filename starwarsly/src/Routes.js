import React from "react";
import { Switch, Route } from "react-router-dom";
import FilmList from "./FilmList";
import Film from "./Film";
import PersonList from "./PersonList";
import PlanetList from "./PlanetList";
import Planet from "./Planet";
import Person from "./Person";
import HomePage from "./HomePage";

/**
 * Routes component that dictates what component is rendered when you go to a certain route:
 * - "/"             ---   HomePage component
 * - "/films"        ---   FilmsList component
 * - "/films/:id"    ---   Film component
 * - "/planets"      ---   PlanetList component
 * - "/planets/:id"  ---   Planet component
 * - "/people"       ---   PersonList component
 * - "/people/:id"   ---   Person component
 */
function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route exact path="/films">
				<FilmList />
			</Route>
			<Route exact path="/films/:id">
				<Film />
			</Route>
			<Route exact path="/planets">
				<PlanetList />
			</Route>
			<Route exact path="/planets/:id">
				<Planet />
			</Route>
			<Route exact path="/people">
				<PersonList />
			</Route>
			<Route exact path="/people/:id">
				<Person />
			</Route>
		</Switch>
	);
}

export default Routes;
