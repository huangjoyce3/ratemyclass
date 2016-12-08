import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


var ReChart = React.createClass({

	render() {

		console.log(this.props.chartData);
		return(
			<div className="chart">
				<ScatterChart width={500} height={500}
	            	margin={{top: 5, right: 30, left: 20, bottom: 5}}>
	            <XAxis dataKey={'difficulty'} name='difficulty'/>
	            <YAxis dataKey={'workload'} name='workload'/>
	            <Scatter name='review' data={this.props.chartData} fill='red' opacity='0.3' />
	            <CartesianGrid strokeDasharray="3 3" />
	            <Tooltip cursor={{strokeDasharray: '3 3'}} />
	            <Legend />
	            </ScatterChart>
            </div>
		)

	}
})


export default ReChart;