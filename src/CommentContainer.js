import React from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';
import CourseInfo from './CourseInfo';
import './css/CommentContainer.css';
import firebase from 'firebase';


var CommentContainer = React.createClass({
	getInitialState(){
        return{reviews:[]}
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
        	course:this.props.courseNumber,
            quarter:event.target.elements['quarter'].value,
            professor:event.target.elements['professor'].value,
            review:event.target.elements['review'].value,
            time:firebase.database.ServerValue.TIMESTAMP
        };

        this.reviewRef.push(isReview);
        event.target.reset();

    },

	render(){

		let reviewKeys = Object.keys(this.state.reviews).filter((d) => {
			return this.state.reviews[d].course === this.props.courseNumber
		});

		var targetCourse = this.props.targetCourse;
		return(
			<div className="courseSec">
			<CourseInfo number={this.props.courseNumber} name={this.props.courseName} type={this.props.courseType} credits={this.props.courseCredits}/>
			<CommentBox handleSubmit={this.createReview}/>
			{reviewKeys.map((d) => {
				return <Comment key={d}
						data={this.state.reviews[d]}
				/>
			})}
			</div>
		);
	}

});

export default CommentContainer;