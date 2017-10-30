import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './domins/login'

const initialState = {
  num: 0
}

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        num: state.num + 1
      }
      break;

    case 'SUB':
      return {
        num: state.num - 1
      }
      break;

    default:
      return state;
  }
}

const add = () => ({
  type: 'ADD'
})

const sub = () => ({
  type: 'SUB'
})

@connect(
  state => ({ count: state.count}),
  {add, sub}
)
class Counter extends Component {
  /* add = () => {
    this.props.dispatch({type: 'ADD'})
  } */

  render() {
    return (
      <div>
        <div onClick={this.props.add}>+</div>
        <div onClick={this.props.sub}>-</div>
        <p>{this.props.count.num}</p>
        <Login />
      </div>
    );
  }
}

export default Counter;