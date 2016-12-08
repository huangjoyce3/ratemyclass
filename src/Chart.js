import React from 'react';
<<<<<<< HEAD


var Chart = React.createClass({
=======
import BarChart from 'react-bar-chart';
 
const ex = [
  {text: 'Man', value: 10}];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
const Chart = React.createClass({
  getInitialState() {
    return { width: 500 };
  },
 
  componentDidMount: () => {
    var domNode = this.getDOMNode();
 
    window.onresize = () => {
     this.setState({width: domNode.offsetWidth}); 
    };
  },
 
>>>>>>> data change
  render() {
  		var difficultyData = this.props.difficultyData;
		var workloadData = this.props.workloadData;

	
    return (
        <div>haha
        </div>
    );
  }

})

export default Chart