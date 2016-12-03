import React from 'react';

var CourseInfo = React.createClass({
	render(){
		return(
			<div className="CourseInfo">
				<p>Course Name: {this.props.targetCourse.number}</p> 
				<p>Offered in: {this.props.targetCourse.name}</p> 
				<p>Requirement: {this.props.targetCourse.type}</p>
				<p>Credits: {this.props.targetCourse.credits}</p> 
			</div>
		);
	}


});

export default CourseInfo;