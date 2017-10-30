/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/10/10
 */

import { combineReducers } from 'redux';
import { countReducer } from './App'

const IndexReducer = combineReducers({
  count: countReducer
});

export default IndexReducer;