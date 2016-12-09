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
				</div>

				<div className="dropdown">
				<Menu
		            direction="vertical"
		            distance={80}
		            width={50}
		            height={50}
		            y={-48}
		            x={10}
		            customStyle={{
		              color: "#fff",
		              textAlign:"center",
		              lineHeight:"50px",
		              backgroundColor: "#B3A36F",
		              border: "solid 1px #82734A",
		              boxShadow: "1px 1px #82734A",
		              borderRadius: "50%",
		              zIndex:"2000",
		            }}>
		            <i className="fa fa-bars fa-2x"></i>
					<Link className="dropLink" activeClassName='active' to="/AllCourses"><i className="fa fa-book"></i></Link>
					<Link className="dropLink" activeClassName='active' to="/About"><i className="fa fa-user-circle-o"></i></Link>
		        </Menu>
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>
		)
	}
});

export default App;