import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST } from "./constants";
import { setSession } from "../auth/actions";


const signupRequest = () => ({ type: SIGNUP_REQUEST });
const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
const signupFailure = (msg) => ({ type: SIGNUP_FAILURE, msg });

const signup = (user) => (dispatch) => {
  dispatch(signupRequest());
  axios.post('/api/signup', user)
    .then(res => {
      // 网络请求状态为200，并且数据库操作自定义的返回码为200时
      if (res.status === 200 && res.data.code === 200) {
        dispatch(signupSuccess());
        console.log(res.data);
        dispatch(setSession(res.data.user))
      } else {
        dispatch(signupFailure(res.data.msg))
      }
    })
    .catch(e => {
      dispatch(signupFailure(e.toString()))
    })
};

export default signup;