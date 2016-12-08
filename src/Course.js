import React from 'react';
import './css/Course.css';
import { browserHistory } from 'react-router';



var Course = React.createClass({
    btnClick() {
        var params;
    browserHistory.push('/', params={targetClass:this.props.number});
        console.log('hi');
    },
	
    render() {

        return (
        	<div className="flex-item box" id="eachCourse">
            <form onSubmit={this.btnClick}>
            <button type="submit" className="btn">{this.props.number}</button>
            </form>
        	<span>{this.props.name}&nbsp;</span>
        	<span>&nbsp;({this.props.credits})&nbsp;</span>
        	<span>&nbsp;&nbsp;{this.props.type}</span>
        	</div>
        )
    }
});

export default Course;