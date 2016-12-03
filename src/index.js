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
                <Route path="CommentContainer" component={CommentContainer}/>
                
                <Route path="AllCourses" component={AllCourses}/>
                <Route path="Auth" component={Auth}/>
                <Route path="About" component={About}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
