import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/layout/Header/Header';
import Footer from '../Components/layout/Footer/Footer';
import Cards from '../Components/layout/Cards/Cards';
import '../scss/layout.scss';

export class Document extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<Cards text="blah" 
						heading="heading" 
						tag="gfhds" 
						href="sdsfhd" 
						img="sfsfgfs" 
						containerClass="fssgg" />
					</div>
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