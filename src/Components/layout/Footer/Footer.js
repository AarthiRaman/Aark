import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (<div className="callout large secondary">
                    <div className="row">
                    <div className="large-4 columns">
                        <h5>Vivamus Hendrerit Arcu Sed Erat Molestie</h5>
                        <p>Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit.</p>

                    </div>
                    <div className="large-3 large-offset-2 columns">
                        <ul className="menu vertical">
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Follow us</a></li>
                        </ul>
                    </div>
                    <div className="large-3 columns">

                    </div>
               </div>
           </div>);
	}
}