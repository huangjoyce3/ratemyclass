import React from 'react';

var Comment = React.createClass({
	render(){
		return(
			<div>            
				<p className="reviews">
	                <span className="content">Review: {this.props.data.review}</span> 
	                <span className="date">Date: {this.props.data.time}</span> 
	                <span className="course taken">User took this course in: {this.props.data.quarter}</span> 
	                <span className="professor">The user took this course with: {this.props.data.professor}</span>
	                <span className="difficaulty">The difficaulty of this course is: {this.props.data.difficaulty}</span>
            	</p>
			</div>
		);
	}
});

export default Comment;