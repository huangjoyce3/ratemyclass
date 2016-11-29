import React from 'react';

var CourseInfo = React.createClass({
	render(){
		return(
			<div className="CourseInfo">
				<p>Course Name: </p> 
				<p>Offered in: </p> 
				<p>Requirement: </p> 
			</div>
		);
	}
	/*this.props.data.name
	  this.props.data.offered
	  this.props.data.requirement
	 */

});

export default CourseInfo;