import React from 'react';
import './css/SignIn.css';
import { Link } from 'react-router';

var SignIn = React.createClass({
	render(){
		return(
			<section>
                <div className="signInPage">
                <div className="signInArea">
                <div className="signTitle">
                    <h1>Rate My Class</h1>
                    <h4>Sign In To Your Account</h4>
                </div>
                <form onSubmit={this.props.submit} className="col s7 authenticate" id="sign-up">
                    <div className="row">
                        <div className="input-field col s7 offset-s3">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">UW Email</label>
                        </div>
                        <div className="input-field col s7 offset-s3">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="signBtn">
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
                </div> 
                </div>
            </section>
		);
	}

});

export default SignIn;