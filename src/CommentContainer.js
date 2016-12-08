import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';
import CourseInfo from './CourseInfo';
import './css/CommentContainer.css';
import firebase from 'firebase';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import EvalChart from './EvalChart';
import $ from 'jquery';
import Baby from 'babyparse';



var CommentContainer = React.createClass({
	getInitialState(){
        return{
            reviews:[], isChecked:'', quarters:["Autumn","Winter","Spring","Summer"],
            quarterSelected:'', courseEvals:[], 
            evalQuestions:["Course as a whole", "Instructor's contribution", "Instructor's effectiveness", "Course content"]
        }
    },

    componentDidMount(){
        this.reviewRef = firebase.database().ref('reviews');

        this.reviewRef.on('value', (snapshot) => {
            if(snapshot.val()){
                this.setState({reviews:snapshot.val()});
            }
        });

        $.get('./data/uw_cec_informatics.csv').then(function(data) {
            var parsed = Baby.parse(data, {header:true});
            this.setState({courseEvals:parsed.data})
        }.bind(this));
    },

    createReview(event){
        event.preventDefault();
        console.log(+event.target.elements['difficulty'.value])

        let isReview = {
            author:this.props.displayName,
        	course:this.props.courseNumber,
            //quarter:event.target.elements['quarter'].state,
            professor:event.target.elements['professor'].value,
            review:event.target.elements['review'].value,
            anonymous:event.target.elements['anon'].value,
            difficulty:+(event.target.elements['difficulty'].value),
            workload:+(event.target.elements['workload'].value),
            time:firebase.database.ServerValue.TIMESTAMP
        };

        this.reviewRef.push(isReview);
        event.target.reset();

    },

    //credit: http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },

	render(){

		let reviewKeys = Object.keys(this.state.reviews).filter((d) => {
			return this.state.reviews[d].course === this.props.courseNumber
		});

		var chartData = [];
		chartData = reviewKeys.map((d) => {
			  return this.state.reviews[d]
		});

        let evalKeys = Object.keys(this.state.courseEvals).filter((d) => {
            return this.state.courseEvals[d].course === this.props.courseNumber
        });

        console.log(this.state.courseEvals)
        console.log(evalKeys)
        var courseEvalData = [];

        var q1sum = +0;
        var q2sum = +0;
        var q3sum = +0;
        var q4sum = +0;
        var counter = +0;

        
        var findSum = evalKeys.forEach((d) =>{
            if(this.state.courseEvals[d].Question === this.state.evalQuestions[0]){
                counter += 1;
                q1sum = +q1sum + +this.state.courseEvals[d].Median;
            }
            if(this.state.courseEvals[d].Question === this.state.evalQuestions[1]){
                q2sum = +q2sum + +this.state.courseEvals[d].Median;
            }
            if(this.state.courseEvals[d].Question === this.state.evalQuestions[2]){
                q3sum = +q3sum + +this.state.courseEvals[d].Median;
            }
            if(this.state.courseEvals[d].Question === this.state.evalQuestions[3]){
                q4sum = +q4sum + +this.state.courseEvals[d].Median;
            }
        })
        var q1Average = q1sum / counter;
        var q2Average = q2sum / counter;
        var q3Average = q3sum / counter;
        var q4Average = q4sum / counter;
        courseEvalData = [{name:this.state.evalQuestions[0], uv:q1Average.toFixed(2), pv: 5, fill:this.getRandomColor()},
                          {name:this.state.evalQuestions[1], uv:q2Average.toFixed(2), pv: 5, fill:this.getRandomColor()},
                          {name:this.state.evalQuestions[2], uv:q3Average.toFixed(2), pv: 5, fill:this.getRandomColor()},
                          {name:this.state.evalQuestions[3], uv:q4Average.toFixed(2), pv: 5, fill:this.getRandomColor()}]
        
		// var workloadData = [];
		// workloadData = reviewKeys.map((d) => {
		// 	  return parseInt(this.state.reviews[d].workload, 10);
		// });
		// console.log(workloadData)

		var targetCourse = this.props.targetCourse;

        
		return(
			<div className="courseSec">
        
			<CourseInfo number={this.props.courseNumber} name={this.props.courseName} 
								type={this.props.courseType} credits={this.props.courseCredits} />

            <div className="chartSec">
            <EvalChart evalData={courseEvalData} chartData={chartData}/>
            </div>

            <CommentBox handleSubmit={this.createReview} quartersList={this.options}
                aut={this.state.quarters[0]} win={this.state.quarters[1]}/>


            <div className="commentSec">
            <h4>What people say...</h4>
            {reviewKeys.map((d) => {
				return <Comment key={d}
						data={this.state.reviews[d]} />
			})}

            </div>


			</div>

		);
	}

});

export default CommentContainer;