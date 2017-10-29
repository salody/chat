import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './Counter';
import Counter from './Counter'

// use Redux DevTools
/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
/*eslint-enable */

const store = createStore(
  reducer,
  composeSetup(applyMiddleware()), // allows redux devtools to watch sagas
);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

export default App;