import { USER_SELECT } from '../Constants/actionType';

const initialState = {
	userTypes : [
		{
			name: 'Vistor'
		},
		{
			name: 'Resident'
		},
		{
			name: 'Moving there'
		},
	],
	userSelected: {}
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
	case USER_SELECT:
		return { ...state, userSelected: action.userSelected };
	default: 
		return state;
	}
}