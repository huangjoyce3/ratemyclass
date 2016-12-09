import React from 'react';
import './css/Course.css';
import { hashHistory } from 'react-router';



var Course = React.createClass({
    btnClick() {

        hashHistory.push('/course/' + this.props.number)
    },
	
    render() {

        return (
        	<div className="flex-item box" id="eachCourse">
            <button onClick={this.btnClick} type="submit" className="btn">{this.props.number}</button>
        	<span>{this.props.name}&nbsp;</span>
        	<span>&nbsp;({this.props.credits})&nbsp;</span>
        	<span>&nbsp;&nbsp;{this.props.type}</span>
        	</div>
        )
    }
});

export default Course;