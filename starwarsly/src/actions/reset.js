import { RESET_ALL } from "./types";

/**
 * Action creator that returns an action object with the following info:
 * - type: RESET_ALL
 */
function resetAll() {
	return { type: RESET_ALL };
}

export { resetAll };
