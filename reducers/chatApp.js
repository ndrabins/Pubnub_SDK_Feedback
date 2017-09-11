import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME
} from '../actions/types';

const INITIAL_STATE = {
  chats: [],
  userName: 'anonymous',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    case LOGIN_WITH_USERNAME:
      return {...state, userName: action.payload}
    default:
      return state;
  }
}