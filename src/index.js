import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CommentContainer from './CommentContainer';
import HomePage from './HomePage';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';





ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="CommentContainer" component={CommentContainer}/>
            </Route>
        </Router>,
  document.getElementById('root')
);