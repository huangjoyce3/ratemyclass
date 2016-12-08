import React from 'react';
import './css/ReChart.css'
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


var ReChart = React.createClass({
	getInitialState(){
		return {search:''}
	},

	filterData(event){
		var value = event.target.value;
		this.setState({search:value})

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
			<div className="chart">
				<input className="search" placeholder="Type in an instructor..." onChange={this.filterData} />
				<ScatterChart width={500} height={500}
	            	margin={{top: 5, right: 30, left: 20, bottom: 5}}>
	            <XAxis dataKey={'difficulty'} name='difficulty'/>
	            <YAxis dataKey={'workload'} name='workload'/>
	            <Scatter name='review' data={data} fill='red' opacity='0.3' />
	            <CartesianGrid strokeDasharray="3 3" />
	            <Tooltip cursor={{strokeDasharray: '3 3'}} />
	            <Legend />
	            </ScatterChart>
            </div>
		)

	}
})


export default ReChart;