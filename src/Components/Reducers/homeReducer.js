import { combineReducers } from 'redux';
import i18nReducer from './i18nReducer';

export default combineReducers({
	i18n: i18nReducer
});