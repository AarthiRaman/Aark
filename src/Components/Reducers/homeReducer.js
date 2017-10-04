import { combineReducers } from 'redux';
import i18nReducer from './i18nReducer';
import LoginReducer from '../widgets/Login/LoginReducer';

export default combineReducers({
	i18n: i18nReducer,
	login: LoginReducer
});