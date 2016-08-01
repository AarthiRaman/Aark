import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from '../utils/createStore';
import Footer from './layout/Footer';
import Header from './layout/Header';
import reducer from './widgets/Login/LoginReducer'


export default class Document extends Component {
    constructor(props)
    {
        super(props);
        this.store = createStore(reducer);
    }

	render() {
		return (
		   <Provider store={this.store}>
                <html>
                    <head>
                        <title>Aark</title>
                        <link href="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css" type="text/css" rel="stylesheet" />
                    </head>
                    <body>
                        <Header />
                        Aark
                        <Footer />
                    </body>
                </html>
            </Provider>
		)
	}
}