import React from 'react';
import './css/ReChart.css'
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


var ReChart = React.createClass({
	getInitialState(){
		return {search:'', shape:''}
	},

	filterData(event){
		var value = event.target.value;
		this.setState({search:value})

	},

	isCross(){
		console.log('hi');
		this.setState({shape:'cross'})

	},

	isStar(){
		this.setState({shape:'star'})

	},

	isSquare(){
		this.setState({shape:'square'})

	},

	isCircle(){
		this.setState({shape:'circle'})
	},


	render() {
		var data = this.props.chartData,
			search = this.state.search.trim().toLowerCase();
		if(search.length > 0){
			data = data.filter(function(data){
				return data.professor.toLowerCase().match(search);
			});
		}

		return(
	
			<div className="dotChart">

				<p>This scatter plot shows the difficulty and workload each reviewer feel about this class. Search for 
				   a specific instructor by typing in the name of instructor. Click the four buttons below to change the 
				   shape of the scatters as you like!</p>
				<input type="text" className="search" placeholder="Type in an instructor..." onChange={this.filterData} />

				<div className="chart2">
					<ScatterChart width={500} height={500}
		            	margin={{top: 5, right: 30, left: 20, bottom: 5}}>
		            <XAxis dataKey={'difficulty'} name='difficulty'/>
		            <YAxis dataKey={'workload'} name='workload'/>
		            <Scatter name='reviews' data={data} fill='red' opacity='0.3' shape={this.state.shape} />
		            <CartesianGrid strokeDasharray="3 3" />
		            <Tooltip cursor={{strokeDasharray: '3 3'}} />
		            <Legend />
		            </ScatterChart>
	            </div>
	            
	            <div className="dots">  
		            <button type="submit" onClick={this.isCross} className="searchCourse">Cross</button>
		            <button type="submit" onClick={this.isStar} className="searchCourse">Star</button>
		            <button type="submit" onClick={this.isSquare} className="searchCourse">Square</button>
		            <button type="submit" onClick={this.isCircle} className="searchCourse">Circle</button>
	            </div>
            </div>
		)

	}
})


export default ReChart;