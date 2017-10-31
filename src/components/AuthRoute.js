/**
 * @function: HOC
 * @desc: 根据component的静态属性isPrivate来进行跳转
 * @author: salody on 2017/10/31
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

//Mock of an Auth method, can be replaced with an async call to the backend. Must return true or false
const isAuthenticated = () => true;

const PRIVATE_ROOT = '/private';
const PUBLIC_ROOT = '/login';

const AuthRoute = ({component, ...props}) => {
  const { isPrivate } = component;
  if (isAuthenticated()) {
    //User is Authenticated
    if (isPrivate === true) {
      //If the route is private the auth may proceed.
      return <Route { ...props } component={ component } />;
    }
    else {
      //If the route is public, the auth is redirected to the app's private root.
      return <Redirect to={ PRIVATE_ROOT } />;
    }
  }
  else {
    //User is not Authenticated
    if (isPrivate === true) {
      //If the route is private the auth is redirected to the app's public root.
      return <Redirect to={ PUBLIC_ROOT } />;
    }
    else {
      //If the route is public, the auth may proceed.
      return <Route { ...props } component={ component } />;
    }
  }
};

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])
};

export default AuthRoute;