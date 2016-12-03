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
			<CourseInfo targetCourse="haha"/>
			<CommentBox />
			<Comment />
			</div>
		);
	}

});

export default CommentContainer;