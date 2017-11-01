import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Login from './modules/login';
import Signup from './modules/signup/index'
import Home from './modules/home';
import NoMatch from './components/NoMatch'

// 权限验证相关
import checkAuth from './helpers/checkAuth';
import { setSession, unsetSession } from './modules/auth/actions';


@connect(
  state => ({ isAuth: state.auth.isAuthenticated })
)
class App extends Component {
  state = {

  }
  componentWillMount() {
    // 初始化时，判断用户是否是登录状态。
    // 若是登录状态，则修改用户状态和填写用户信息
    checkAuth()
      .then((data) => {
        if (data.isAuth) {
          this.props.dispatch(setSession(data.user))
        } else {
          this.props.dispatch(unsetSession())
        }
      })
  }
  render() {
    const { isAuth } = this.props;
    return (
      <Switch>
        <Route path="/" exact render={() => (
          isAuth ? (
            <Redirect to="/home" />
          ) : (
              <Login />
            )
        )} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> 
        <Route path="/home" component={Home} />
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default withRouter(App);