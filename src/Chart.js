import React from 'react';
import BarChart from 'react-bar-chart';
 
const data = [
  {text: 'Man', value: 500}, 
  {text: 'Woman', value: 300} 
];
 
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
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  },
 
  render() {
    return (
        <div>
            <div style={{width: '50%'}}> 
                <BarChart ylabel='Quantity'
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div>
    );
  }
})

export default Chart