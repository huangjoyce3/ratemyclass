import React from 'react';
import './css/About.css';

var About = React.createClass({
	render(){
		return(
			<div className="about">            
				<h3>About Us</h3>
				<div className="description">
				<p>The purpose of this INFO 343 project is to ease the hassle of making college schedules. It helps students to find classes that best fit their academic goals and interests through connection with their peers. It is a one stop for all students needs for selecting classes. </p>
				<p>Currently, this project focuses only on classes that are offered within iSchool.</p>
				
				</div>
				
				<div className="pictures">
				<p>Created by three hardworking Informatics girls with love&#9829;</p>
					<div className="member">
						<div className="image">
						<img src={require('./imgs/Christy.jpg')} />
						</div>
						<p>Christy Lu</p>
					</div>

					<div className="member">
						<div className="image">
						<img src={require('./imgs/Joyce.jpg')} />
						</div>
						<p>Joyce Huang</p>
					</div>

					<div className="member">
						<div className="image">
						<img src={require('./imgs/Jing.jpg')} />
						</div>
						<p>Jing Wen Pan</p>
					</div>
				</div>
			</div>
		);
	}
});

export default About;