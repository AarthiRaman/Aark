import React, { Component } from 'react';

export default class Salutations extends Component {

	render() {
		return (<div onClick={this.handleClick.bind(this)}>
			Hello {this.props.name}
		</div>);
	}
}