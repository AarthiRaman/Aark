import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../utils/createStore';
import Footer from '../Components/layout/Footer';
import Header from '../Components/layout/Header';

export default class Document extends Component {
    constructor(props)
    {
        super(props);
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
                        <div id="content" ></div>
                        <script src="index.js"></script>
                        <Footer />
                    </body>
                </html>
            </Provider>
		)
	}
}