import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Components/layout/Header/Header";
import Footer from "../Components/layout/Footer/Footer";
import "../scss/layout.scss";

export class Document extends Component {

    
	render() {
		const { i18n } =this.props;
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	state.i18n;
};

export default connect(
	mapStateToProps
  )(Document);