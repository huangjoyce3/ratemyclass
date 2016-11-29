
import React from 'react';
var Course = React.createClass({
	
    render() {
        return (
        	<div className="flex-item box">
        	<p>{this.props.number}</p>
        	</div>
        )
    }
});

export default Course;