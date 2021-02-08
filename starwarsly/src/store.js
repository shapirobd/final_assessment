/**
 * Unfamiliar imports:
 *
 * - persistStore:
 *   - accepts a store (store) as an argument
 *   - returns persistor object
 *
 * - persistReducer:
 *   - accepts a config (persistConfig) and a reducer (root) as arguments
 *   - returns an enhanced reducer that allows us to persist our redux store to storage
 *
 * - storage:
 *   - defaults to localStorage for web
 *
 * - autoMergeLevel2:
 *   - This will auto merge one level deep. Auto merge means if the some piece of
 *     substate was modified by your reducer during the REHYDRATE action, it will
 *     skip this piece of state.
 *
 *
 * Exports:
 *
 * - store:
 *   - redux store object created with persistedReducer (based on root reducer)
 *
 * - persistedStore:
 *   - persistor object returned from persistStore(store)
 */

import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import root from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export const persistedStore = persistStore(store);
