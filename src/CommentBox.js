import React from 'react';

var CommentBox = React.createClass({
	render(){
		return(
			<div>
			<form>
            	<div className="input-field col s12">

                    <p>When did you take this class?</p>
                    <div className="input-field">
                    <input id="taken" type="text" className="validate"/>
                    <label htmlFor="taken">Enter a quarter</label>
                    </div>

                    <input id="taken" placeholder="You took this class in..."type="text" className="validate"/>

                    <p>Who was your instructor?</p>

                    <input id="professor" type="text" className="validate"/>
                    <label htmlFor="professor">You took this class with...</label>

                    <input id="professor" placeholder="You took this class with.." type="text" className="validate" />

                    <p>Write a review</p>
                	<input id="review" type="text" className="validate"/>
                    <label htmlFor="review">Write a review</label>

                	<input id="review" placeholder="Write a review" type="text" className="validate" />

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