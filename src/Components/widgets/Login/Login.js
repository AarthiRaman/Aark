import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("yup");
    }

	render() {
	    this.handleClick();
		return (
		  <a href="javascript:void(0)" onClick={this.handleClick.bind(this)}>Login</a>
		)
	}
}