import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME
} from '../actions/types';

export const fetchMessages = (roomName) => async (dispatch) => {
  try {
    console.log(roomName);
    dispatch({ type: FETCH_MESSAGES, payload: data });
    // callback(); could passin function here
  } catch(e) {
    console.error(e);
  }
};

export const LoginWithUsername = (name) => {
  return dispatch => {
    console.log("Loggin in with" + name);
    dispatch({type: LOGIN_WITH_USERNAME, payload: name});
  }
}