import AuthActions from '../actions/AuthActions';
import { Parse } from 'parse';

class AuthService {

  login(user) {
    AuthActions.login();
    Parse.User.logIn(user.email, user.password).then(function() {
      AuthActions.loginSucceeded();
    }, function(err) {
      console.log(err);
      AuthActions.loginFailed();
    });
  }

  logout() {
    AuthActions.logout();
    Parse.User.logOut().then(function() {
      AuthActions.logoutSucceeded();
    }, function(err) {
      console.log(err);
      AuthActions.logoutFailed();
    });
  }

  signup(user) {
    AuthActions.signup();
    //for login with email/password, the email is set as the username.
    var u = new Parse.User({
        username: user.email,
        email: user.email,
        password: user.password,
        nickname: user.nickname
      });

    u.signUp().then(function() {
      AuthActions.signupSucceeded();
    }, function(err) {
      console.log(err);
      AuthActions.signupFailed();
    });
  }

}

export default new AuthService()
