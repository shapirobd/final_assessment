import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { resetAll } from "./actions/reset";

/**
 * HomePage component that shows the home page, which has the following functionalities:
 * - if there are already films within the store, show the reset button
 * - if there are not already films within the store, show the start button
 */
function HomePage() {
	// const films = useSelector((st) => st.films);
	// console.log(films);
	// const loaded = films[1] !== undefined;
	// console.log(loaded);
	const loaded = useSelector((st) => st.films[1] !== undefined);
	const dispatch = useDispatch();

	function reset() {
		dispatch(resetAll());
	}

	return (
		<>
			{loaded ? (
				<button className="btn btn-danger btn-block btn-lg" onClick={reset}>
					Reset To Fresh Exploration
				</button>
			) : (
				<Link to="/films/1" className="btn btn-primary btn-block btn-lg">
					Start with &ldquo;A New Hope&rdquo;
				</Link>
			)}
			<img
				className="mt-3 mb-5 w-100"
				alt="StarWars.ly"
				src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
			/>
		</>
	);
}

export default HomePage;
