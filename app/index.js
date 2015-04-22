'use strict';

import React from 'react';
import { Parse } from 'parse';
import Router from 'react-router';
var { Route, DefaultRoute, NotFoundRoute} = Router;
import RouterContainer from './services/RouterContainer';

import App from './components/App.react';
import Login from './components/Login.react';
import Signup from './components/Signup.react';
import Main from './components/Main.react';

// Insert your app's keys here:
Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

var routes = (
  <Route handler={App}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="main" path="/" handler={Main}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

router.run(function (Handler) {
  React.render(<Handler/>, document.getElementById('container'));
});
