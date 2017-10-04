import { LOGIN_MODAL_TOGGLE } from '../Constants/actionType';

export function showLoginToggle(showLoginModal) {
	
	return dispatch => {
		dispatch({
			type: LOGIN_MODAL_TOGGLE,
			showLoginModal
		});
	};
}