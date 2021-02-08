import React from "react";
import { Link } from "react-router-dom";

/**
 * Takes 1 argument - an object containing the following:
 * - items: an array of items (films, people, or planets)
 * - title: the category of the list ("Films", "People", or "Planets")
 *
 * ItemList component that maps over the items array and for each item,
 * renders a Link to take you to the route for its individual details.
 */
function ItemList({ items, title }) {
	return (
		<>
			<h1 className="my-3">{title}</h1>
			{items.length !== 0 ? (
				<ul style={{ fontSize: "120%" }}>
					{items.map((item) => (
						<li key={item.id}>
							<Link to={item.url}>
								{item.name} <small className="text-muted">{item.id}</small>
							</Link>
						</li>
					))}
				</ul>
			) : (
				<p>You haven't explored any items of this type yet.</p>
			)}
		</>
	);
}

export default ItemList;
