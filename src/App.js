import React from 'react';
import './css/App.css';
import firebase from 'firebase';
import { Link } from 'react-router';

var App = React.createClass({	
	render(){
		return(
			<div className="App">
				<div className="navbar">
					<Link className="link" id="main" activeClassName='active' to="/HomePage"><i className="fa fa-home"></i>Main</Link>
					<Link className="link" activeClassName='active' to="/About">About Us</Link>
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default App;