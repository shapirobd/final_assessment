import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar";
import Routes from "./Routes";

/**
 * Main App component that renders the navbar and the correct component depending on the current route.
 */
function App() {
	return (
		<div className="App container">
			<BrowserRouter>
				<NavBar />
				<Routes />
			</BrowserRouter>
		</div>
	);
}

export default App;
