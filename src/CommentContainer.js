import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';
import CourseInfo from './CourseInfo';
import './css/CommentContainer.css';

var CommentContainer = React.createClass({
	render(){
		var targetCourse = this.props.targetCourse;
		return(
			<div className="courseSec">
			<p>{this.props.course}</p>
			<CourseInfo number={this.props.courseNumber} name={this.props.courseName} type={this.props.courseType} credits={this.props.courseCredits}/>
			<CommentBox />
			<Comment />
			</div>
		);
	}

});

export default CommentContainer;