import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';
import CourseInfo from './CourseInfo';

var CommentContainer = React.createClass({
	render(){
		return(
			<section>
			<CourseInfo />
			<CommentBox />
			<Comment />
			</section>
		);
	}

});

export default CommentContainer	;