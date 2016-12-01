import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';
import CourseInfo from './CourseInfo';
import './css/CommentContainer.css';

var CommentContainer = React.createClass({
	render(){
		return(
			<div className="courseSec">
			<CourseInfo />
			<CommentBox />
			<Comment />
			</div>
		);
	}

});

export default CommentContainer;