import React from 'react';
import './css/CommentBox.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var CommentBox = React.createClass({
    getInitialState () {
        return {
            isChecked: false
        };
    },
    
    handleChange(){
        this.setState({isChecked: event.target.checked});
    },
    
    toggleIsChecked() {
        this.setState({isChecked: !this.state.isChecked});
    },

    handleButtonClick(event) {
        this.toggleIsChecked();
    },

	render(){
		return(
            <div>
                <div className="comment-form">
                    <div className="comment">
                    <h4>Rate this Class</h4>
                    <div className="rateClass">
        			    <form onSubmit={this.props.handleSubmit}>
                            
                            <p>When did you take this class?</p>
                            <select required id='quarter'>
                                <option value='Autumn'>Autumn</option>
                                <option value='Winter'>Winter</option>
                                <option value='Spring'>Spring</option>
                                <option value='Summer'>Summer</option>
                            </select>

                            <p>Who was your instructor?</p>
                            <select required id='instructor'>
                            <option value='other'>Other</option>
                                {
                                    this.props.instructorsList.map(function(d, i){
                                        return <option selected key={'instructor'+i} value={d}>{d}</option>
                                    })
                                }

                            </select>
                            <p>Write a review</p>
                        	<input required id="review" placeholder="Write a review" type="text" className="validate" />


                            <p>Would you like to be anonymous?</p>
                            <select  id='anon'>
                                <option value='n'>No</option>
                                <option value='y'>Yes</option>
                            </select>

                            <p>Difficulty of this class?</p>
                            <input required id="difficulty" placeholder="1 (easy breezy) to 10 (challenging)" min="1" max="10" type="number" step="0.5" className="validate"/>

                            <p>The amount of workload if this class?</p>
                            <input required id="workload" placeholder="1 (light) to 10 (unbearable)" min="1" max="10" type="number" step="0.5" className="validate" />

                            <button type="submit" className="searchCourse">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

		);
	}

});

export default CommentBox;