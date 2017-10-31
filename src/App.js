import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './modules/login';
import Signup from './modules/signup/index'
import Home from './modules/home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;