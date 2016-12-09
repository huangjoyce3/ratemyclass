import React from 'react';
import './css/CommentBox.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


var CommentBox = React.createClass({
    getInitialState() {
        return{
            quarters: [{radioValue:'Autumn'},{radioValue:'Winter'}],
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

    onQuartersChanged (event) {
        console.log(this.state.quarter)
    this.setState({quarter:event.target.value});
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
                            {/*<Select onChange={this.onChange}
                                options={this.state.options}
                                value={this.state.value} />*/}
                            <select id='quarter'>
                                <option value='Autumn'>Autumn</option>
                                <option value='Winter'>Winter</option>
                                <option value='Spring'>Spring</option>
                                <option value='Summer'>Summer</option>
                            </select>

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
                            <input id="difficulty" placeholder="1 (easy) to 5 (hard)" min="1" max="10" type="number" step="0.5" className="validate"/>

                            <p>The amount of workload if this class?</p>
                            <input id="workload" placeholder="1 (light) to 5 (heavy)" min="1" max="10" type="number" step="0.5" className="validate" />
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