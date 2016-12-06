import React from 'react';


var Chart = React.createClass({


	render(){
		var difficultyData = this.props.difficultyData;
		var workloadData = this.props.workloadData;
		console.log(difficultyData);
		console.log(workloadData);
	
		return(
			<p>hi</p>
		)


	}


})


export default Chart;