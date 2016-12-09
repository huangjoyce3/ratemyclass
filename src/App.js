import React from 'react';
import './css/App.css';
import firebase from 'firebase';
import { Link } from 'react-router';
import Menu from 'react-motion-menu';
import '../node_modules/font-awesome/css/font-awesome.css'


var App = React.createClass({	
	render(){
		return(
			<div className="App">
				<div className="navbar">
					<Link className="Link" activeClassName='active' to="/About"><i className="fa fa-user-circle-o"></i>&nbsp;&nbsp;About Us</Link>
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default App;