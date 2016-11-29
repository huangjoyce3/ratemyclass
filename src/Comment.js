import React from 'react';

var Comment = React.createClass({
	render(){
		return(
			<div>            
				<p className="reviews">
	                <span className="user">Username</span> 
	                <span className="content">Review</span> 
	                <span className="tags">Selected Tags</span> 
	                <span className="date">Date</span> 
	                <span className="course taken">User took this course in ? quarter ?</span> 
            	</p>
			</div>
		);
	}

	/*
		this.props.user.name
		this.props.user.review
		this.props.tag array
		firebase function
		this.props.user.taken
	*/
});

export default Comment;