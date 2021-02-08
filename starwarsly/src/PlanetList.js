import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

/**
 * PlanetList component that creates an array from all planets from the store,
 * and passes the array to an ItemList component in order to display them.
 */
function PlanetList() {
	const items = useSelector((st) =>
		Object.values(st.planets).map((p) => ({ ...p, url: `/planets/${p.id}` }))
	);
	return <ItemList title="Planets" items={items} />;
}

export default PlanetList;
