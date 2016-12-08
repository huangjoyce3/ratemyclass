
import React, { Component } from 'react'

var sampleData = require('dsv?delimiter=,!./data/sample.csv')

var chartSeries = [{
            field: 'Under 5 Years',
            name: 'Under 5 Years'
        }, {
            field: '5 to 13 Years',
            name: '5 to 13 Years'
        }, {
            field: '14 to 17 Years',
            name: '14 to 17 Years',
            style: {
                "fill-opacity": .4
            }
        }, {
            field: '18 to 24 Years',
            name: '18 to 24 Years'
        }, {
            field: '25 to 44 Years',
            name: '25 to 44 Years'
        }, {
            field: '45 to 64 Years',
            name: '45 to 64 Years'
        }, {
            field: '65 Years and Over',
            name: '65 Years and Over'
        },

    ],
    x = function(d) {
        return d.course;
    },
    xDomain = sampleData.map(function(d) {
        return d.course;
    }),

    xRangeRoundBands = { 
    	interval: [0, 840], padding: .1 
    },

    xScale = 'ordinal',
    y = function(d) {
        return +d;
    }


	module.exports = React.createClass({
    getInitialState: function() {
        return {
            width: 600,
            height: 500,
            series: chartSeries
        }
    },
    onClick: function() {
        this.setState({
            width: this.state.width === 600 ? 500 : 600,
            height: this.state.width === 600 ? 600 : 500,
            series: this.state.width === 600 ? [{
                field: '5 to 13 Years',
                name: '5 to 13 Years'
            }, {
                field: '14 to 17 Years',
                name: '14 to 17 Years'
            }, {
                field: '18 to 24 Years',
                name: '18 to 24 Years'
            }, {
                field: '25 to 44 Years',
                name: '25 to 44 Years',
                style: {
                    "fill-opacity": .4
                }
            }] : chartSeries
        })
    },
    render: function() {

        return (
            <div>
        <button onClick={this.onClick}>toggle</button>
        <BarGroupChart
          width= {this.state.width}
          height= {this.state.height}
          data= {sampleData}
          chartSeries = {this.state.series}
          x= {x}
          xDomain= {xDomain}
          xScale= {xScale}
          y= {y}
        />
      </div>
        )
    }
})