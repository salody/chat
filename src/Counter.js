import React, { Component } from 'react';
import { connect } from 'react-redux';

const initialState = {
  count: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1
      }
      break;

    case 'SUB':
      return {
        count: state.count - 1
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
        <p>{this.props.count}</p>
      </div>
    );
  }
}

export default Counter;