import React, { Component } from 'react';
import Topmenu from './Topmenu';

export default class Header extends Component {
	render() {
		return (<div className="top-bar">
                   <div className="top-bar-left">
                       <ul className="menu">
                            <li className="menu-text">Aark</li>
                       </ul>
                   </div>
                   <Topmenu />
               </div>);
	}
}