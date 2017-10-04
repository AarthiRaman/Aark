import { LOGIN_SET, LOGIN_MODAL_TOGGLE } from '../../../Constants/actionType';

const initialState = {
	loggedIn : false,
	showLoginModal: false
};

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
	case LOGIN_SET:
		return { ...state, loggedIn: action.loggedIn };
	case LOGIN_MODAL_TOGGLE:
		return { ...state, showLoginModal: action.showLoginModal };
	default:
		return state;
	}
}