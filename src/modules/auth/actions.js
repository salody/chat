import { SET_SESSION, UNSET_SESSION} from './constants';

export function setSession(user) {
  return {
    type: SET_SESSION,
    user
  }
}

export function unsetSession() {
  return {
    type: UNSET_SESSION,
  }
}