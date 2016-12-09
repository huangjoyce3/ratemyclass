import React from 'react';
import {RadialBarChart, RadialBar, Tooltip, Legend} from 'recharts';
import {Radar, RadarChart, PolarGrid,PolarAngleAxis, PolarRadiusAxis} from 'recharts';

var EvalChart = React.createClass({
	

	render() {
		const style = {
		  	top: 0,
		  	left: 350,
		  	lineHeight: '24px'
		  };
		return(
			
			<div className="chart">
				<RadialBarChart title='Course Eval' width={500} height={300} cx={150} cy={150}
					innerRadius={20} outerRadius={140} barSize={10} data={this.props.evalData}>
	    		<RadialBar fill='black' minAngle={15} label background clockWise={true} dataKey='uv'/>
	            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='left' wrapperStyle={style}/>
	            <Tooltip cursor={{strokeDasharray: '3 3'}} />
	            </RadialBarChart >
	            <RadarChart cx={400} cy={250} outerRadius={150} width={600} height={500} data={this.props.evalData}>
		          <Radar name='Michael Freeman, WI16' dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
		          <PolarGrid />
		          <PolarAngleAxis dataKey="name" />
		          <PolarRadiusAxis/>
		          <Tooltip cursor={{strokeDasharray: '3 3'}} />
		        </RadarChart>
            </div>
            
		)

	}
})


export default EvalChart;