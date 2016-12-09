import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from './Auth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AllCourses from './AllCourses';
import Course from './Course';
import CommentContainer from './CommentContainer';
import HomePage from './HomePage';
import About from './About';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';





ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/HomePage" component={HomePage}/>
                <Route path="/About" component={About}/>
                <Route path="/course/:searchString" component={HomePage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
