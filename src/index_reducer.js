/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/10/10
 */

import { combineReducers } from 'redux';
import sessionReducer from './modules/auth/reducer';
import signupReducer from './modules/signup/reducer';


const IndexReducer = combineReducers({
  auth: sessionReducer,
  signup: signupReducer
});

export default IndexReducer;