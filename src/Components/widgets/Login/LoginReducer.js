const initialState = {
	logged : false
};
export default function loginReducer(state = initialState, action) {
	switch (action.type) {
	case 'LOG_IN_ERROR':
		return state;
	default:
		return state;
	}
}