import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../utils/createStore';
import Document from './Document';

import homeReducer from '../Reducers/homeReducer';

export default class Content extends Component {
	constructor(props)
    {
		super(props);
		this.store = configureStore(homeReducer);
	}

	render() {
		return (
			<Provider store={this.store}>
				<div>
					<Document />
				</div>
			</Provider>
		);
	}
}
