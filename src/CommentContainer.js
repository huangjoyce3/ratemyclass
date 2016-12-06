import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';
import CourseInfo from './CourseInfo';
import './css/CommentContainer.css';
import firebase from 'firebase';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Chart from './Chart';


var CommentContainer = React.createClass({
	getInitialState(){
        return{reviews:[], isChecked:'', quarters:["Autumn","Winter","Spring","Summer"]}
    },

    componentDidMount(){
        this.reviewRef = firebase.database().ref('reviews');

        this.reviewRef.on('value', (snapshot) => {
            if(snapshot.val()){
                this.setState({reviews:snapshot.val()});
            }


        });

    },

    createReview(event){
        event.preventDefault();

        let isReview = {
            author:this.props.displayName,
        	course:this.props.courseNumber,
            //Doesnt work... yet
            //quarter:event.target.elements['Select'].state,
            professor:event.target.elements['professor'].value,
            review:event.target.elements['review'].value,
            anonymous:event.target.elements['anon'].value,
            difficulty:event.target.elements['difficulty'].value,
            workload:event.target.elements['workload'].value,
            time:firebase.database.ServerValue.TIMESTAMP
        };

        this.reviewRef.push(isReview);
        event.target.reset();

    },

    checkBoxChange(event){
        this.setState({isChecked: event.target.checked});
    },

	render(){

		let reviewKeys = Object.keys(this.state.reviews).filter((d) => {
			return this.state.reviews[d].course === this.props.courseNumber
		});

		var difficultyData = [];
		difficultyData = reviewKeys.map((d) => {
			  return this.state.reviews[d].difficulty;
		});
		console.log(difficultyData);

		var workloadData = [];
		workloadData = reviewKeys.map((d) => {
			  return this.state.reviews[d].workload;
		});
		console.log(workloadData)

		var targetCourse = this.props.targetCourse;
		return(
			<div className="courseSec">
			<CourseInfo number={this.props.courseNumber} name={this.props.courseName} 
								type={this.props.courseType} credits={this.props.courseCredits} />
			<CommentBox handleSubmit={this.createReview} quartersList={this.options}
                aut={this.state.quarters[0]} win={this.state.quarters[1]}/>
			{reviewKeys.map((d) => {
				return <Comment key={d}
						data={this.state.reviews[d]} />
			})}
			

			</div>
		);
	}

});

export default CommentContainer;