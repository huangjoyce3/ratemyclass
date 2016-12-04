import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var CommentBox = React.createClass({
    getInitialState() {
        return{
            options: [
                { value: 'autumn', label: 'Autumn' },
                { value: 'winter', label: 'Winter' },
                { value: 'spring', label: 'Spring' },
                { value: 'summer', label: 'Summer' },
            ]
        }
    },

    onChange(value){
        this.setState({value});
    },

	render(){
		return(
            <div>
                <div className="comment-form">
        			<form onSubmit={this.props.handleSubmit}>
                    	<div className="input-field col s12">
                            
                            <p>When did you take this class?</p>
                            <Select onChange={this.onChange}
                                options={this.state.options}
                                value={this.state.value}
                            
                            />

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

                            <p>Difficulty of this class?</p>
                            <input id="difficulty" placeholder="1 (easy) to 5 (hard)" min="1" max="5" type="number" className="validate"/>

                            <p>The amount of workload if this class?</p>
                            <input id="workload" placeholder="1 (light) to 5 (heavy)" min="1" max="5" type="number" className="validate" />

                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>

		);
	}

});

export default CommentBox;