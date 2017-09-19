import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME,
  CREATE_NEW_CHANNEL,
  SEND_MESSAGE,
  TYPING_UPDATE,
  ONLINE_USER,
  FIND_USERS
} from '../actions/types';

const INITIAL_STATE = {
  chats: [],
  userName: 'anonymous',
  selectedChannel: 'null',
  currentChat : null,
  messages: [],
  users: [],
  typing: false,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {...state, messages: [...state.messages, action.payload]};
    case LOGIN_WITH_USERNAME:
      return {...state, userName: action.payload}
    case CREATE_NEW_CHANNEL:
      return {...state, selectedChannel: action.payload, currentChat: action.currentChat};
    case SEND_MESSAGE:
      return state;
    case TYPING_UPDATE:
      return {...state, typing: action.payload};
    case FIND_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
}