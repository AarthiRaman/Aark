import React, { Component } from 'react';
import styles from './Header.scss';
import classnames from 'classnames';
export default class Header extends Component {
	render() {
		const headerClass = classnames(styles.header, 'clearit'); 
		return (<div className={headerClass}>
                   <div className={styles.topBarLeft}>
                      <a href="#">
                         <h1>Aark</h1>
                     </a>
                   </div>
                   <div className={styles.topBarRight}>
                        <ul className="menu">
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
               </div>);
	}
}