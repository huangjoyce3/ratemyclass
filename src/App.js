import React from 'react';
import { Link } from 'react-router';

var App = React.createClass({
	render(){
		return(
			<section>
			<div>App.js</div>
			<div className="navbar">
				<Link className="link" activeClassName='active' to="/">Home Page</Link>
				<Link className="link" activeClassName='active' to="/CommentContainer">Comment Page</Link>
			</div>
			<div className="children">
				{this.props.children}
			</div>
			</section>
		)
	}


});

export default App;