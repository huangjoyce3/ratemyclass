import React from 'react';
import './css/Course.css';

var Course = React.createClass({
	
    render() {
        return (
        	<div className="flex-item box" id="eachCourse">
        	<span><b>{this.props.number}&nbsp;&nbsp;</b></span>
        	<span>{this.props.name}&nbsp;</span>
        	<span>&nbsp;({this.props.credits})&nbsp;</span>
        	<span>&nbsp;&nbsp;{this.props.type}</span>
        	</div>
        )
    }
});

export default Course;