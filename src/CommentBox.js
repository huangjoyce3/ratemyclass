import React from 'react';

var CommentBox = React.createClass({
	render(){
		return(
			<div>
			<form>
            	<div className="input-field col s12"> //onClick



                    <p>When did you take this class?</p>
                    <input id="taken" type="text" className="validate"/>
                    <label htmlFor="taken">You took this class in...</label>

                    <p>Who was your instructor?</p>
                    <input id="professor" type="text" className="validate" />
                    <label htmlFor="professor">You took this class with...</label>

                    <p>Write a review</p>
                	<input id="review" type="text" className="validate" />
                    <label htmlFor="review">Write a review</label>

                    <p>Would you like other users to contact you?</p>
                    //materialize click options 

                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
            </div>

		);
	}

});

export default CommentBox;