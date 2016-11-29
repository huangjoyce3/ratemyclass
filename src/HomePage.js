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
				<input id="searchString" type="text" className="validate"/>
	            <label htmlFor="searchString">Search for a class</label>
	            </div>
	        </div>
		);
	}

});


export default HomePage;