import React from "react";
import { Link } from "react-router-dom";

/**
 * Takes 2 arguments:
 * - items: an array of items (films, people, or planets)
 * - title: the category of the list ("Films", "People", or "Planets")
 *
 * Sublist component that maps over the items array and for each item,
 * renders a Link to take you to the route for its individual details.
 * (an item shows as "Unknown" in the list if not found within the store")
 */
function Sublist({ title, items }) {
	return (
		<>
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<Link to={item.url}>{item.display}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Sublist;
