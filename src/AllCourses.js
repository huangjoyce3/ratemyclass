import React, { Component } from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import Course from './Course';

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
				<h2 className="white-text">Informatics Courses Winter 2017</h2>
				<div>
					{this.state.courses.map(function(course, i){
						return(
							<Course
								key={'course-'+i}
								number={course.number}/>
						)
					})}
				</div>
			</div>
		);
	}
});

export default AllCourses;