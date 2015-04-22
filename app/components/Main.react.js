import React from 'react';
import AuthCheck from './AuthCheck.react';
import { Parse } from 'parse';

class Main extends React.Component {

  render() {
    return (<h1>Hello {Parse.User.current().get('nickname')}!</h1>);
  }

}

export default AuthCheck(Main);
