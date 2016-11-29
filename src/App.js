import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';

var App = React.createClass({
	
	render(){

		return(
			<section>
			<div>App.js</div>
			<div className="navbar">
				<Link className="link" activeClassName='active' to="/auth"></Link>
				<Link className="link" activeClassName='active' to="/CommentContainer">Comment Page</Link>
				<div><Link className="link" activeClassName='active' to="/AllCourses">All Courses Page</Link></div>
			</div>
			<div className="children">
				{this.props.children}
			</div>
			</section>
		)
	}


});

export default App;