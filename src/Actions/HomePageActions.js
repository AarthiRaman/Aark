import { SUBURB_POPULATE, SUBURB_SELECT, USER_SELECT } from '../Constants/actionType';

export function populateSuburbs() {
	return dispatch => {
		dispatch({
			type: SUBURB_POPULATE,
			suburbList: [{'name':'Triplicane','id':1,'img':''},{'name':'TNagar','id':2,'img':''},{'name':'Mylapore','id':3,'img':''},{'name':'Porur','id':4,'img':''}]
		});
	};
}

export function selectSuburb(suburbSelected) {
	return dispatch => {
		dispatch({
			type: SUBURB_SELECT,
			suburbSelected
		});
	};
}

export function selectUser(userSelected) {
	return dispatch => {
		dispatch({
			type: USER_SELECT,
			userSelected
		});
	};
}