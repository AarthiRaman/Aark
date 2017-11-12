import { combineReducers } from 'redux';
import i18nReducer from './i18nReducer';
import LoginReducer from '../Components/widgets/Login/LoginReducer';
import SuburbReducer from './suburbReducer';
import UserReducer from './userReducer';

export default combineReducers({
	i18n: i18nReducer,
	login: LoginReducer,
	suburb: SuburbReducer,
	user: UserReducer
});