import React from 'react';
import './css/CourseInfo.css';

//Uppercase letters credit to:
//http://stackoverflow.com/questions/4878756/javascript-how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
function toCamelCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
var CourseInfo = React.createClass({


render(){
	
		return(
			<div className="CourseInfo">
				<h4>{this.props.number} : &nbsp; {toCamelCase(this.props.name)}</h4> 
				<p>General Requirement: {this.props.type}</p>
				<p>Credits: {this.props.credits}</p>
			</div>
		);
	}


});

export default CourseInfo;