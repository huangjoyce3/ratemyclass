import React from 'react';


var CommentBox = React.createClass({
	render(){
		return(
            <div>
                <div className="comment-form">
        			<form onSubmit={this.props.handleSubmit}>
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
            </div>

		);
	}

});

export default CommentBox;