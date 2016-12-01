import React from 'react';
var SignUp = React.createClass({
	render(){
		return(
			<section className="container">
                <div className="signTitle">
                    <h1>Rate My Classes</h1>
                    <h4>Sign up for an Account</h4>
                </div>
                <form onSubmit={this.props.submit} className="col s7 authenticate" id="sign-up">
                    <div className="row">
                        <div className="input-field col s7 offset-s3">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s7 offset-s3">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s7 offset-s3">
                            <input type="text" id="displayName" className="validate" />
                            <label htmlFor="displayName">Display Name</label>
                        </div>
                    </div>
                    <div className="signBtn">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </section>
		);
	}

});

export default SignUp;