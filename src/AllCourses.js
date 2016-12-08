import React, { Component } from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import Course from './Course';
import './css/AllCourses.css';

var AllCourses = React.createClass({
	getInitialState(){
		return{courses:[]}
	},
	componentDidMount(){
		$.get('./data/info_time_schedule_winter_2017.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({courses:parsed.data})
		}.bind(this));
	},
	render(){
		return(
			<div className="coursesPage">
				<h2 className="allTitle">Course Offerings in Informatics</h2>
				<div className="infoCourses">
					<p>Available courses in <b>Winter 2017</b>:</p>
					<div className="courseList">
						{this.state.courses.map(function(course, i){
							return(
								<Course
									key={'course-'+i}
									number={course.number}
									name={course.name}
									type={course.type}
									credits={course.credits} />
							)
						})}
					</div>
				</div>
			</div>
		);
	}
});

export default AllCourses;