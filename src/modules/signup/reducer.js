import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST
} from "./constants";

const initialState = {
  isFetching: false,
  msg: ''
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        isFetching: true,
        msg: '正在请求注册'
      };

    case SIGNUP_FAILURE:
      return {
        isFetching: false,
        msg: action.msg
      };

    case SIGNUP_SUCCESS:
      return {
        isFetching: false,
        msg: '注册成功'

      };

    default:
      return state;
  }
};

export default signupReducer;