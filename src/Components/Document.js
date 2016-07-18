import React, { Component } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';

export default class Document extends Component {
	render() {
		return (
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
		)
	}
}