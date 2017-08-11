import React, { Component } from "react";

export default class Topmenu extends Component {
	render() {
		return (
		<div className="top-bar-right">
           <ul className="menu">
               <li><a href="#">Events</a></li>
               <li><a href="#">Login</a></li>
               <li><a href="#">Contact us</a></li>
           </ul>
        </div>);
	}
}



