import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../utils/createStore';
import Login from '../Components/widgets/Login/Login';
import reducer from '../Components/widgets/Login/LoginReducer';
import homeReducer from '../Components/combineReducers/homeReducer';

export default class Content extends Component {
    constructor(props)
    {
        super(props);
        this.store = createStore(homeReducer);
    }

	render() {
		return (
		   <Provider store={this.store}>
                <Login />
            </Provider>
		)
	}
}