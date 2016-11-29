import React from 'react';

var HomePage = React.createClass({
	render(){
		return(
			<div>
				<div>HomePage</div>
				<input id="searchString" type="text" className="validate"/>
	            <label htmlFor="searchString">Search for a class</label>
	        </div>
		);
	}

});


export default HomePage;