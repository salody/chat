/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/10/10
 */

import { combineReducers } from 'redux';
import sessionReducer from './modules/auth/reducer';


const IndexReducer = combineReducers({
  auth: sessionReducer
});

export default IndexReducer;