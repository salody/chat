import {
  SET_SESSION,
  UNSET_SESSION
} from "./constants";

const initialState = {
  user: {
    name: '',
    email: '',
    type: ''
  },
  user_id: '',
  isAuthenticated: false,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        user: {
          name: action.user.name,
          email: action.user.email,
          type: action.user.type
        },
        user_id: action.user.id,
        isAuthenticated: true
      };

    case UNSET_SESSION:
      return {
        user: {
          name: '',
          email: '',
          type: ''
        },
        user_id: '',
        isAuthenticated: false
      };

    default:
      return state;
  }
};

export default sessionReducer;