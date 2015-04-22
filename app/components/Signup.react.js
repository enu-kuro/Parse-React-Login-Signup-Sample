import React from 'react/addons';
import ReactMixin from 'react-mixin';
import AuthService from '../services/AuthService';

export default class Signup extends React.Component {

  constructor() {
    this.state = {
      email: '',
      password: '',
      nickname: ''
    };
  }

  signup(e) {
    e.preventDefault();
    AuthService.signup(this.state);
  }

  render() {
    console.log("Signup");
    return (
      <div className="login jumbotron center-block">
        <h1>Signup</h1>
        <form role="form">
          <div className="form-group">
            <label htmlFor="nickname">Nickname</label>
            <input type="text" valueLink={this.linkState('nickname')} className="form-control" id="nickname" ref="nickname" placeholder="Nickname" />
          </div>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="text" valueLink={this.linkState('email')} className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
