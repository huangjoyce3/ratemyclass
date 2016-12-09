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
            <div className="allCourse">
            <button onClick={this.btnClick} type="submit" className="btn">{this.props.number}</button>
        	<span>&nbsp;{this.props.name}</span>
        	<span>({this.props.credits})</span>
        	<span>{this.props.type}</span>
        	</div>
            </div>
        )
    }
});

export default Course;