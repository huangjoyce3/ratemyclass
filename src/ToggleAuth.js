//from INFO 343 m17
import React from 'react';
import './css/ToggleAuth.css';

var ToggleAuth = React.createClass({
    render() {
        // Text / buttonText options
        let text = this.props.authOption == 'sign-up' ? 'Already have an account?' : 'Need an account?'
        let buttonText = this.props.authOption == 'sign-up' ? 'Sign In' : 'Sign Up'
        return(
            <div className="needAcc">
                <p><em>{text}</em><div onClick={this.props.handleClick} type="submit" className="upBtn">{buttonText}</div></p>
            </div>
        );
    }
});

export default ToggleAuth;