import React from 'react';


var CommentBox = React.createClass({
	render(){
		return(
            <div>
                <div className="comment-form">
        			<form onSubmit={this.props.handleSubmit}>
                    	<div className="input-field col s12">
                            
                            <p>When did you take this class?</p>
                            {/*<select value={this.state.value} onChange={this.props.handleChange}>
                              <option value="1">Autumn</option>
                              <option value="2">Winter</option>
                              <option value="3">Spring</option>
                              <option value="4">Summer</option>
                            </select>*/}
                            <input id="quarter" placeholder="I took this class in.." type="text" className="validate" />

                            <p>Who was your instructor?</p>
                            <input id="professor" placeholder="I took this class with.." type="text" className="validate" />

                            <p>Write a review</p>
                        	<input id="review" placeholder="Write a review" type="text" className="validate" />

                            <p>Would you like to be anonymous? (Users cannot contact you)</p>
                                {/*<input type="checkbox" id="no" onChange={this.props.handleChange} checked={this.state.isChecked}/>
                                    <label for="no">No</label>
                                <input type="checkbox" id="yes" value="yes"/>
                                    <label for="yes">Yes</label>*/}
                            <input id="anon" placeholder="Y/N" type="text" className="validate" />

                            <p>Difficulty of this class? Rank 1 (easiest) to 5 (hardest)</p>
                            <input id="difficulty" min="1" max="5" type="number" className="validate"/>

                            <p>The amount of workload if this class? Rank 1(light) to 5(heavy)</p>
                            <input id="workload" min="1" max="5" type="number" className="validate" />




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