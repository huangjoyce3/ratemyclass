import React from 'react';
import './css/HomePage.css'
import $ from 'jquery';
import Baby from 'babyparse';
import firebase from 'firebase';
import FirebaseConfig from './Config';
import ToggleAuth from './ToggleAuth';
import SignUp from './SignUp';
import SignIn from './SignIn';
// import { browserHistory } from 'react-router'
//import {Router} from 'react-router'

import CommentContainer from './CommentContainer';




var HomePage = React.createClass({
	getInitialState(){
		return{data:[], searchString:'', targetCourse:[], checked:false, 
			   user:null, authOption:'sign-in', hasCourse:false, hasResult:true}
	},

	componentDidMount(){
		 // Initialize app
        firebase.initializeApp(FirebaseConfig);

        // Check for authentication state change (test if there is a user)
        firebase.auth().onAuthStateChanged((user) => {
            if (this.state.checked !== true) {
                if(user) {
                    this.setState({user:user})
                }
            }

            // Indicate that state has been checked
            this.setState({checked:true})
        });

		$.get('./data/info_time_schedule_winter_2017.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			var classes = {};
			parsed.data.forEach(function(d){
				classes[d.number] = d;
			});
			this.setState({classes: classes});
			console.log(classes);
			this.setState({data:parsed.data});
		}.bind(this));
	},

	setSearchString(event){
		console.log('hi');
		event.preventDefault();
		var value = event.target.childNodes[0].value;
		value = value.toUpperCase();
		this.setState({searchString:value});
		this.getCourse(value);


	},

	getCourse(searchString){
		var self = this;
		if(searchString !== ''){

			if ( self.state.classes.hasOwnProperty(searchString) ) {
				var targetClass = self.state.classes[searchString];
				self.setState({targetCourse:targetClass, hasCourse:true, hasResult:true});
			} else {
				self.setState({hasResult:false});

			}
		}
	},



	 // Sign up for an account
    signUp(event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;
        let displayName = event.target.elements['displayName'].value;

        // Remember to enable email/password authentication on Firebase!
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.updateProfile({
                    displayName: displayName
                }).then(() => {
                    this.setState({user:firebase.auth().currentUser});
                })
            });

        // Reset form
        event.target.reset();
    },

    // Sign into an account
    signIn (event){
        event.preventDefault();

        // Get form values
        let email = event.target.elements['email'].value;
        let password = event.target.elements['password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({user:firebase.auth().currentUser});
            });

        // Clear form
        event.target.reset();

    },

    // Sign out of an account
    signOut() {
        firebase.auth().signOut().then(() => {
            this.setState({user:null});
        });
    },

    // Toggle between 'sign-up' and 'sign-in'
    toggleLogin() {
        let option = this.state.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },



	render(){
		// Determine which 'authenticate' component should be shown
        if(this.state.authOption === 'sign-up') {
            var authComponent = <SignUp submit={this.signUp}/>
        }
        else {
             authComponent = <SignIn submit={this.signIn}/>
        }
		return(
				<div>
					{!this.state.user &&
	                    <div>
	                        {authComponent}
	                        <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
	                    </div>

                	}

                	{this.state.user && !this.state.hasCourse &&
						<section>
							<div className="title">
								<h1>Rate My Classes</h1>
								<h4>Help you find the prefect class!</h4>
							</div>
							<div className="searchBar">
							<form onSubmit={this.setSearchString}>
								<input placeholder="Search a course"/>
							    <button type="submit" className="searchCourse">Submit</button>
							</form>
							</div>
							<p>{this.state.targetCourse.number}</p>


						</section>
					}

					{this.state.user && !this.state.hasResult &&
						<div className="no-result">Class Not Found</div>

					}


					{this.state.hasCourse &&
						<div>
							<form onSubmit={this.setSearchString}>
								<input placeholder="Search a course"/>
								<button type="submit" className="searchCourse">Submit</button>
							</form>
							<CommentContainer 
								courseNumber={this.state.targetCourse.number}  
								courseName={this.state.targetCourse.name}
								courseType={this.state.targetCourse.type}
								courseCredits={this.state.targetCourse.credits}
							/>
						</div>

					}
					
	        </div>
		);
	}

});


export default HomePage;