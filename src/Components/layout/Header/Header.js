import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import classnames from 'classnames';

export default function Header({ loggedIn, onLoginClick }) {
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
                            {
                                !loggedIn && <li>
                                    <span onClick={() => onLoginClick(true)}>Login</span>
                                </li>
                            }
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
               </div>);
}

Header.propTypes = {
	loggedIn : PropTypes.bool.isRequired,
	onLoginClick : PropTypes.func.isRequired,
};