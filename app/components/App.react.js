import React from 'react';
import { Parse } from 'parse';
import Router from 'react-router';
var { RouteHandler, Link } = Router;
import RouterContainer from '../services/RouterContainer';
import AuthService from '../services/AuthService';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header className="page-header">
          <h1>Parse & React Login/Signup Sample</h1>
        </header>
        <nav className="navbar navbar-default">
          <div className="collapse navbar-collapse">
            {this.headerItems}
          </div>
        </nav>
        <RouteHandler/>
      </div>
    );
  }

  get headerItems() {
    if (!Parse.User.current()) {
      return (
        RouterContainer.get().getCurrentPathname() === '/login' ?
        <Link to="signup"><button className="btn btn-link">Signup</button></Link>
      : <Link to="login"><button className="btn btn-link">Login</button></Link>
      )
    } else {
      return (
        <button className="btn btn-link" onClick={this.logout}>Logout</button>
      )
    }
  }

  logout() {
    AuthService.logout();
  }

}
