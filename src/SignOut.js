import React from 'react';
import './css/SignOut.css'

var SignOut = React.createClass({
	render(){
		return(
			<div className="outBtn">
			<div className="needAcc">
				<button onClick={this.props.submit} type="submit" className="upBtn">Sign Out</button>
			</div>
			</div>
		);
	}

});

export default SignOut;