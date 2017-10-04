import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import styles from './Login.scss';

const FB_APPID = '791783714227269';
const GOOGLE_APPID = '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com';

export default function Login({onWrapperClick}) {
	return <div className={styles.aarkModalWrapper} >
			<div className={styles.aarkModalLayer} onClick={() => onWrapperClick(false)}> 
				content
			</div>
			<div className={styles.aarkModalInnerWrapper}>
				<h2>Log in to Aark</h2>

			<div className={styles.aarkLoginWrap}>
				<FacebookLogin
					appId={FB_APPID}
					language="en_US"
					scope="public_profile,email"
					xfbml={true}
					fields="id,email,name"
					className="facebook-login"
					buttonText="Login With Facebook" />
			</div>

			<div className={styles.aarkLoginWrap}>
				<GoogleLogin
					clientId={GOOGLE_APPID}
					buttonText="Login"
					redirectUri="/loggedIn"
				/>
			</div>
		</div>
	</div>;
	
}