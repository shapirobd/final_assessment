import { LOAD_PERSON, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * Reducer for people that dictates how to modify redux state depending on the action type:
 * - RESET_ALL: set state back to INITIAL_STATE (INITIAL_STATE = {})
 * - LOAD_PERSON: keep films & planets the same, but update people to include the person from the action's payload
 * - default: return state
 *
 * @param {*} state
 * @param {*} action
 */
function people(state = INITIAL_STATE, action) {
	switch (action.type) {
		case RESET_ALL:
			return { ...INITIAL_STATE };

		case LOAD_PERSON:
			return {
				...state,
				[action.payload.id]: { ...action.payload },
			};

		default:
			return state;
	}
}

export default people;
