import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AuthService from '../services/AuthService';
import RouterContainer from '../services/RouterContainer';

export default {

  login: (user) => {
    console.log("login");
  },

  loginSucceeded: () => {
    RouterContainer.get().transitionTo('/');
    console.log("loginSucceeded");
  },

  loginFailed: () => {
    console.log("loginFailed");
  },

  logout: () => {
    console.log("logout");
  },

  logoutSucceeded: () => {
    RouterContainer.get().transitionTo('/login', {});
    console.log("logoutSucceeded");
  },

  logoutFailed: () => {
    console.log("logoutFailed");
  },

  signup: () => {
    console.log("signup");
  },

  signupSucceeded: () => {
    RouterContainer.get().transitionTo('/');
    console.log("signupSucceeded");
  },

  signupFailed: () => {
    RouterContainer.get().transitionTo('/signup', {});
    console.log("signupFailed");
  }

}
