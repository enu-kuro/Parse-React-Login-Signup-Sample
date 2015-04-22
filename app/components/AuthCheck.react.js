import React from 'react';
import { Parse } from 'parse';

export default (Component) => {
  return class Authenticated extends React.Component {

      static willTransitionTo(transition) {
        if (!Parse.User.current()){
          transition.redirect('/login', {}, {'nextPath' : transition.path});
        }
      }

      render () {
        return <Component {...this.props}/>
      }
  }
};
