import React from 'react';
import './css/HomePage.css'

var HomePage = React.createClass({
	render(){
		return(
			<div>
				<div className="title">
					<h1>Rate My Classes</h1>
					<h4>Help you find the prefect class!</h4>
				</div>
				<div className="searchBar">
				<div className="input-field">
					<label htmlFor="searchString">Search for a class</label>
					<input type="text" id="searchString" className="validate"/>
	            </div>
	            </div>
	        </div>
		);
	}

});


export default HomePage;