import React, { Component } from "react";
import Topmenu from "./Topmenu";
import styles from "./Header.css";
export default class Header extends Component {
	render() {
		return (<div className={styles.root}>
                   <div className="top-bar-left">
                       <ul className="menu">
                            <li className="menu-text">Aarthi Raman</li>
                       </ul>
                   </div>
                   <Topmenu />
               </div>);
	}
}