import React from 'react';
import './css/HomePage.css'
import $ from 'jquery';
import Baby from 'babyparse';

var HomePage = React.createClass({
	getInitialState(){
		return{data:[], searchString:'', targetCourse:[]}
	},

	componentDidMount(){
		$.get('./data/info_time_schedule_winter_2017.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({data:parsed.data})
		}.bind(this));
	},

	setSearchString(event){
		event.preventDefault();
		var value = event.target.childNodes[0].value;
		//console.log(value);
		this.setState({searchString:value});
		this.getCourse(value);


	},

	getCourse(searchString){
		var self = this;
		if(searchString !== ''){
			self.state.data.map(function(d, i) {
				var isClass = d.number;
				// console.log(isClass);
				// console.log(searchString);

				if(searchString === isClass) {
					self.setState({targetCourse:d})
					console.log('HI');
				}
			});
		}
	},


	render(){
		return(
			<div>
				<div className="title">
					<h1>Rate My Classes</h1>
					<h4>Help you find the prefect class!</h4>
				</div>
				<div className="searchBar">
				<form onSubmit={this.setSearchString}>
					<input placeholder="Search a course"/>
				    <button type="submit" className="searchCourse">Submit</button>
				</form>
				</div>
				<p>{this.state.targetCourse.name}</p>
				<p>{this.state.targetCourse.number}</p>
				<p>{this.state.targetCourse.type}</p>
				<p>{this.state.targetCourse.credits}</p>
	        </div>
		);
	}

});


export default HomePage;