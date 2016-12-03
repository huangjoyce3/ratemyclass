import React from 'react';

var CourseInfo = React.createClass({
	render(){
		return(
			<div className="CourseInfo">
				<p>Course Number: {this.props.number}</p> 
				<p>Course Title: {this.props.name}</p> 
				<p>General Requirement: {this.props.type}</p>
				<p>Credits: {this.props.credits}</p> 
			</div>
		);
	}


});

export default CourseInfo;