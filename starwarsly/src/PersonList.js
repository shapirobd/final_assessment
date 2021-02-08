import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

/**
 * PersonList component that creates an array from all people from the store,
 * and passes the array to an ItemList component in order to display them.
 */
function PersonList() {
	const items = useSelector((st) =>
		Object.values(st.people).map((p) => ({ ...p, url: `/people/${p.id}` }))
	);
	return <ItemList title="People" items={items} />;
}

export default PersonList;
