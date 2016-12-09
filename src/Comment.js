import React from 'react';
import './css/Comment.css';

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
		var date = new Date(this.props.data.time);
		var month = date.getMonth()+1;
		var day = date.getDate();
		var year = date.getFullYear();
		var dateString = month + '/' + day + '/' + year;
		return(
			<div className="allReview">
				<div className='reviewSec'> 
				<h5 id="reviewHeader">{displayName}</h5>
				<hr></hr>           
				<p className="reviews">
	                <span className="content"><b>{this.props.data.review}</b></span> 
	                <p className="date">{dateString}</p> 
	                <p className="course taken">User took this course in: {this.props.data.quarter}</p> 
	                <p className="professor">Instructor: {this.props.data.professor}</p>
	                <p className="difficulty">Difficulty: {this.props.data.difficulty}</p>
	                <p className="workload">Workload: {this.props.data.workload}</p>
            	</p>
            	</div>
			</div>
		);
	}
});

export default Comment;