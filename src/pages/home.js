import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "../utils/createStore";
import Header from "../Components/layout/Header/Header";
import Footer from "../Components/layout/Footer/Footer";

import homeReducer from "../Components/combineReducers/homeReducer";

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
				<Header />
				<Footer />
			</div>
		</Provider>
		);
	}
}