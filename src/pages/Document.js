import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/layout/Header/Header';
import Footer from '../Components/layout/Footer/Footer';
import Login from '../Components/widgets/Login/Login';

import { showLoginToggle } from '../Actions/LoginActions';

import '../scss/layout.scss';
import styles from './Document.scss';


export class Document extends Component {
	render() {
		const { login, dispatchShowLoginToggle } = this.props; 
		return (
			<div>
				<Header userLogged={login.isLoggedIn} onLoginClick={dispatchShowLoginToggle}/>
				<div className={styles.aarkContent}> 
					{
						(login.showLoginModal && !login.isLoggedIn) && <Login  onWrapperClick={dispatchShowLoginToggle} showLoginModal={login.showLoginModal}/>
					}
					</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	i18n: state.i18n,
	login: state.login
});

export default connect(
	mapStateToProps, 
	{
		dispatchShowLoginToggle: showLoginToggle
	}
	
)(Document);