import React from 'react';
import './css/HomePage.css'
import $ from 'jquery';
import Baby from 'babyparse';
import firebase from 'firebase';
import FirebaseConfig from './Config';
import ToggleAuth from './ToggleAuth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Router, hashHistory } from 'react-router';
import CommentContainer from './CommentContainer';
import AllCourses from './AllCourses';
import About from './About';

var HomePage = React.createClass({
	getInitialState(){
		
		return{data:[], searchString:'', targetCourse:[], checked:false, 
			   user:null, authOption:'sign-in', hasCourse:false, hasResult:true,
			   showCourses:false


			}
	},

	componentDidMount(){
		var self = this;

		if (firebase.apps.length === 0) {
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
			
		} 
		$.get('./data/info_time_schedule_winter_2017.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			var classes = {};
			parsed.data.forEach(function(d){
				classes[d.number] = d;
			});
			this.setState({classes: classes});
			console.log(classes);
			this.setState({data:parsed.data});


			if (self.props.params && self.props.params.hasOwnProperty('searchString') && self.props.params.searchString !== '') {
				self.getCourse(self.props.params.searchString);
			}
		}.bind(this));

		if (self.state.classes) {
			if (self.props.params && self.props.params.hasOwnProperty('searchString') && self.props.params.searchString !== '') {
				self.getCourse(self.props.params.searchString);
			}
		}

	},

	setSearchString(event){
		event.preventDefault();
		var value = event.target.childNodes[0].value;
		value = value.toUpperCase();
		//this.setState({searchString:value});
		//this.getCourse(value);
		hashHistory.push('/course/' + value);

	},

	getCourse(searchString){
		var self = this;
		if(searchString !== '' && self.state.classes){

			if ( self.state.classes.hasOwnProperty(searchString) ) {
				var targetClass = self.state.classes[searchString];
				self.setState({targetCourse:targetClass, hasCourse:true, hasResult:true});
			} else {
				self.setState({hasResult:false});

			}
		}
	},


	componentWillReceiveProps(nextProps) {
		var self = this;

		console.log(self.props, nextProps);
		self.getCourse(nextProps.params.searchString);
		
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
            this.setState({authOption:'sign-in'});
            this.setState({user:false});
            this.setState({hasCourse:false});
        });
    },

    // Toggle between 'sign-up' and 'sign-in'
    toggleLogin() {
        let option = this.state.authOption === 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },

    showCourses() {
    	this.setState({showCourses:!this.state.showCourses});

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
				<About/>

					{!this.state.user &&
	                    <div>
	                        {authComponent}
	                        <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
	                    </div>
                	}

                	{this.state.user &&
	                    <SignOut submit={this.signOut}/>
	                      
         			}

                	{this.state.user && !this.state.hasCourse &&

                	<div className="mainPage">
	                	<div className="searchArea">
								<section>
									<div className="title">
										<h1>Rate My Class</h1>
										<h4>Find the perfect class!</h4>
									</div>
									<div className="searchBar">
										<form onSubmit={this.setSearchString}>
											<input type="text" placeholder="Search a course"/>
										    <button type="submit" className="searchCourse">Search</button>
										</form>
									</div>
									{this.state.user && !this.state.hasResult && 
									<div className="no-result">Class Not Found</div>
								}
									<h5>OR</h5>
									<div className="seeCourse">
									<button type="submit" className="searchCourse" onClick={this.showCourses}>See All Courses</button>
									</div>
									{this.state.showCourses &&
										<AllCourses />
									}

								</section>
								
								
							


						</div>
					</div>
					}


					{this.state.hasCourse && 
						<div className="coursePage">
							<div className="searchClass">

								<form onSubmit={this.setSearchString}>
									<input type="text" placeholder="Search a new course"/>
									<button type="submit" className="searchCourse">Search</button>
								</form>

							</div>


							{this.state.user && !this.state.hasResult &&
								<div className="no-result">Class Not Found</div>
							}


							<hr></hr>

							<CommentContainer 
								displayName={this.state.user.displayName}
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