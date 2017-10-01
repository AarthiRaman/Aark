import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../utils/createStore';
import Document from './Document';

import homeReducer from '../Components/Reducers/homeReducer';

export default class Content extends Component {
	constructor(props)
    {
		super(props);
		this.store = createStore(homeReducer);
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
