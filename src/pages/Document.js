import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Components/layout/Header/Header';
import Footer from '../Components/layout/Footer/Footer';
import Login from '../Components/widgets/Login/Login';
import Options from '../Components/widgets/Options/Options';

import { showLoginToggle } from '../Actions/LoginActions';
import { populateSuburbs, selectSuburb, selectUser } from '../Actions/HomePageActions';

import '../scss/layout.scss';
import styles from './Document.scss';

export class Document extends Component {
	componentWillMount() {
		this.props.dispatchPopulateSuburbs();
	}

	render() {
		const { login, suburb, user, dispatchShowLoginToggle, dispatchSelectSuburb, dispatchSelectUser } = this.props; 
		return (
			<div>
				<Header userLogged={login.isLoggedIn} onLoginClick={dispatchShowLoginToggle}/>
				<div className={styles.aarkContent}> 
					{
						(login.showLoginModal && !login.isLoggedIn) && <Login  onWrapperClick={dispatchShowLoginToggle} showLoginModal={login.showLoginModal}/>
					}
					
					{
						!suburb.suburbSelected.name && <Options 
							items={suburb.suburbList}
							onSelect={dispatchSelectSuburb}
							heading="Select the suburb you are after"/>
					}
					
					{
						suburb.suburbSelected.name && <Options 
							items={user.userTypes}
							onSelect={dispatchSelectUser}
							heading="I am a "/>
					}
					</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	i18n: state.i18n,
	login: state.login,
	suburb: state.suburb,
	user: state.user
});

export default connect(
	mapStateToProps, 
	{
		dispatchShowLoginToggle: showLoginToggle,
		dispatchPopulateSuburbs: populateSuburbs,
		dispatchSelectUser: selectUser,
		dispatchSelectSuburb: selectSuburb
	}
	
)(Document);