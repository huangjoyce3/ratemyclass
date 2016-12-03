import React from 'react';
import firebase from 'firebase';

var CommentBox = React.createClass({
    getInitialState(){
        return{quarter:'', professor:'', review:'', reviews:[]}
    },



    componentDidMount(){
        this.reviewRef = firebase.database().ref('reviews');

        this.reviewRef.on('value', (snapshot) => {
            if(snapshot.val())

        });

    },

    createReview(event){
        event.preventDefault();


        let quarter = event.target.elements['quarter'].value;
        let professor = event.target.elements['professor'].value;
        let review = event.target.elements['review'].value;
        this.setState({quarter:quarter, professor:professor, review:review});


        let isReview = {
            quarter:event.target.elements['quarter'].value,
            professor:event.target.elements['professor'].value,
            review:event.target.elements['review'].value,
            time:firebase.database.ServerValue.TIMESTAMP
        };

        this.reviewRef.push(isReview);
        event.target.reset();

    },


	render(){
		return(
            <div>
                <div className="comment-form">
        			<form onSubmit={this.createReview}>
                    	<div className="input-field col s12">
                            <p>When did you take this class?</p>
                            <input id="quarter" placeholder="Enter a quarter"type="text" className="validate"/>

                            <p>Who was your instructor?</p>
                            <input id="professor" placeholder="You took this class with.." type="text" className="validate" />

                            <p>Write a review</p>
                        	<input id="review" placeholder="Write a review" type="text" className="validate" />

                            <p>Would you like other users to contact you?</p>
                            <p>Would you like to comment as an anonymous?</p>

                            //materialize click options 
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>

                <div>
                    <p>{this.state.quarter}</p>
                    <p>{this.state.professor}</p>
                    <p>{this.state.review}</p>
                </div>
            </div>

		);
	}

});

export default CommentBox;