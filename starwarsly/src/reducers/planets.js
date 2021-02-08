import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * Reducer for planets that dictates how to modify redux state depending on the action type:
 * - RESET_ALL: set planets state back to INITIAL_STATE (INITIAL_STATE = {})
 * - LOAD_PLANET: keep films & people the same, but update planets to include the planet from the action's payload
 * - default: return state
 *
 * @param {*} state
 * @param {*} action
 */
function planets(state = INITIAL_STATE, action) {
	switch (action.type) {
		case RESET_ALL:
			return { ...INITIAL_STATE };

		case LOAD_PLANET:
			return {
				...state,
				[action.payload.id]: { ...action.payload },
			};

		default:
			return state;
	}
}

export default planets;
