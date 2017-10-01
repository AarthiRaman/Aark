
const APPID = '791783714227269';

window.fbAsyncInit = function() {
	FB.init({ // eslint-disable-line
		appId            : APPID,
		autoLogAppEvents : true,
		xfbml            : true,
		version          : 'v2.10'
	});
	FB.AppEvents.logPageView(); // eslint-disable-line
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = '//connect.facebook.net/en_US/sdk.js';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));