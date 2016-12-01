import React from 'react';
import './css/HomePage.css'
import $ from 'jquery';
import Baby from 'babyparse';

var HomePage = React.createClass({
	getInitialState(){
		return{data:[], searchString:'', targetCourse:[],checked:false, user:null, authOption:'sign-in'}
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
			this.setState({data:parsed.data})
		}.bind(this));
	},

	setSearchString(event){
		event.preventDefault();
		var value = event.target.childNodes[0].value;
		//console.log(value);
		this.setState({searchString:value});
		this.getCourse(value);


	},

	getCourse(searchString){
		var self = this;
		if(searchString !== ''){
			self.state.data.map(function(d, i) {
				var isClass = d.number;
				// console.log(isClass);
				// console.log(searchString);

				if(searchString === isClass) {
					self.setState({targetCourse:d})
					console.log('HI');
				}
			});
		}
	}

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
        let option = this.state.authOption == 'sign-in' ? 'sign-up' : 'sign-in';
        this.setState({authOption:option});
    },


	render(){

		return(
			{!this.state.user &&
                    <div>
                        {authComponent}
                        <ToggleAuth handleClick={this.toggleLogin} authOption={this.state.authOption} />
                    </div>

                }
			<div>
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
				<p>{this.state.targetCourse.name}</p>
				<p>{this.state.targetCourse.number}</p>
				<p>{this.state.targetCourse.type}</p>
				<p>{this.state.targetCourse.credits}</p>
	        </div>
		);
	}

});


export default HomePage;