import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export let configureStore = (reducer) => {
	const middlewares = [thunk];
	return applyMiddleware(...middlewares)(createStore)(reducer, {});
};