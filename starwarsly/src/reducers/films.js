import { LOAD_FILM, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * Reducer for films that dictates how to modify redux state depending on the action type:
 * - RESET_ALL: set films state back to INITIAL_STATE (INITIAL_STATE = {})
 * - LOAD_FILM: keep people & planets the same, but update films to include the film from the action's payload
 * - default: return state
 *
 * @param {*} state
 * @param {*} action
 */
function films(state = INITIAL_STATE, action) {
	switch (action.type) {
		case RESET_ALL:
			return { ...INITIAL_STATE };

		case LOAD_FILM:
			return {
				...state,
				[action.payload.id]: { ...action.payload },
			};

		default:
			return state;
	}
}

export default films;
