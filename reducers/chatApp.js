import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME,
  CREATE_NEW_CHANNEL,
  SEND_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
  chats: [],
  userName: 'anonymous',
  selectedChannel: 'general'
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return state;
    case LOGIN_WITH_USERNAME:
      return {...state, userName: action.payload}
    case CREATE_NEW_CHANNEL:
      return {...state, selectedChannel: action.payload};
    case SEND_MESSAGE:
      return state;
    default:
      return state;
  }
}