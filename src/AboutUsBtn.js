import React from 'react';
import './css/SignOut.css'

var AboutUsBtn = React.createClass({
	render(){
		return(
			<div className="outBtn">
			<div className="btn">
				<button onClick={this.props.about} type="submit" className="upBtn">About Us</button>
			</div>
			</div>
		);
	}

});

export default AboutUsBtn;