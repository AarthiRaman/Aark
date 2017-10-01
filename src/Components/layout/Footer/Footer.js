import React, { Component } from 'react';
import styles from './Footer.scss';

export default class Footer extends Component {
	render() {
		return (<div className={styles.footer}>
                    <div className="large-3 large-offset-2 columns">
                    <ul className="menu vertical">
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Follow us</a></li>
                    </ul>
                 </div>
           </div>);
	}
}