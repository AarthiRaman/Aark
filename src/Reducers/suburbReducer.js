import { SUBURB_SELECT, SUBURB_POPULATE, SUBURB_SHOW_CONTENT } from '../Constants/actionType';

const initialState = {
	suburbList : [],
	suburbSelected: {}
};

export default function suburbReducer(state = initialState, action) {
	switch (action.type) {
	case SUBURB_SELECT:
		return { ...state, suburbSelected: action.suburbSelected };
	case SUBURB_SHOW_CONTENT:
		return state;
	case SUBURB_POPULATE:
		return { ...state, suburbList: action.suburbList };
	default: 
		return state;
	}
}