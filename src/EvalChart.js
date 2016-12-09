import React from 'react';
import {RadialBarChart, RadialBar, Tooltip, Legend} from 'recharts';
import {Radar, RadarChart, PolarGrid,PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import ReChart from './ReChart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './css/EvalChart.css'


var EvalChart = React.createClass({
	
	handleSelect(index, last) {
	    	console.log('Selected tab: ' + index + ', Last tab: ' + last);
	},

	render() {
		const style = {
		  	top: 0,
		  	left: 350,
		  	lineHeight: '40px'
		  };

		  const styles = {
		  	tab: {
		    	backgroundColor: "#efd594",
		    	color: "#56339a",
		    	borderColor:"#56339a",
		    	fontWeight:"bold",
			},
		  };

		return(
			<Tabs onSelect={this.handleSelect} selectedIndex={0}>

			<TabList style={styles.tab}>
			   <Tab>Course Evaluation</Tab>
	           <Tab>Review</Tab>
	        </TabList>

	        <TabPanel>
	        <div className="eval">
	        	<p>This chart consists of data gathered from the UW Course Evaluation Catalog. The numbers displayed are the averages for each question of all sections taught in the previous calendar year. 
	        	The scale values range from 0 being 'Very Poor' to 5 being 'Excellent'. Evaluations for teaching assistants are excluded in this dataset.</p>
				<div className="chart1">
					<RadialBarChart title='Course Eval' width={500} height={300} cx={150} cy={150}
						innerRadius={20} outerRadius={140} barSize={10} data={this.props.evalData}>
		    		<RadialBar fill='black' minAngle={15} label background clockWise={true} dataKey='uv'/>
		            <Legend iconSize={10} width={250} height={100} layout='vertical' verticalAlign='left' wrapperStyle={style}/>
		            <Tooltip cursor={{strokeDasharray: '3 3'}} />
		            </RadialBarChart>
			    </div>
		    </div>
		    </TabPanel>

		    <TabPanel>
		    <div className="reChart">
		        <ReChart chartData={this.props.chartData}/>
		    </div>	    
		    </TabPanel>
		    </Tabs>
		)

	}
})


export default EvalChart;