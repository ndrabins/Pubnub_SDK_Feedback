import {
  FETCH_MESSAGES
} from '../actions/types';

const INITIAL_STATE = {
  chats: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}