import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

/**
 * FilmList component that creates an array from all films from the store,
 * and passes the array to an ItemList component in order to display them.
 */
function FilmList() {
	const items = useSelector((st) =>
		Object.values(st.films).map((f) => ({ ...f, url: `/films/${f.id}` }))
	);
	return <ItemList title="Films" items={items} />;
}

export default FilmList;
