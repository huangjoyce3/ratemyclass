import React from 'react';

var Comment = React.createClass({
	render(){
		//Anonymous function
		let displayName;
		if(this.props.data.anonymous.toLowerCase() == 'y'){
			displayName = (
				<span>Anonymous</span>
				)
		}else{
			displayName=this.props.data.author;
		}

		return(
			<div> 
				<h5 id="reviewHeader">{displayName}</h5>           
				<p className="reviews">
	                <span className="content">{this.props.data.review}</span> 
	                <span className="date">Date: {this.props.data.time}</span> 
	                <span className="course taken">User took this course in: {this.props.data.quarter}</span> 
	                <span className="professor">The user took this course with: {this.props.data.professor}</span>
	                <span className="difficaulty">Difficulty: {this.props.data.difficulty}</span>
	                <span className="difficaulty">Workload: {this.props.data.workload}</span>
            	</p>
			</div>
		);
	}
});

export default Comment;