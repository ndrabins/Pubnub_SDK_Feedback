import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME,
  CREATE_NEW_CHANNEL,
  SEND_MESSAGE
} from '../actions/types';

import ChatEngineCore from 'chat-engine'

export const ChatEngine = ChatEngineCore.create({
  publishKey: "pub-c-0fb6e2c9-c3fa-4dbc-9c8d-86a3813c73c8",
  subscribeKey: "sub-c-e3f6d3fe-934e-11e7-a7b2-42d877d8495e"
});

export const fetchMessages = (roomName) => async (dispatch) => {
  ChatEngine.on('$.ready', (data) => {
    let chat = new ChatEngine.Chat(roomName); //roomName
    console.log("Fetching messages for" + roomName);

    chat.on('message', function(payload) {
        console.log('live message', payload)
    });
    
    // if this chat receives a message that's not from this sessions
    chat.on('$.history.message', function(payload) {
        console.log('old message', payload)
    });
    dispatch({ type: FETCH_MESSAGES, payload: "stuff"});
  });
};

export const sendMessage = (channelName, message) => {
  return dispatch => {
    let chat = new ChatEngine.Chat(channelName)
    chat.emit('message', {text: message});
    dispatch({type: SEND_MESSAGE });
  }
}

export const LoginWithUsername = (name) => {
  return dispatch => {
    console.log("Loggin in with" + name);
    ChatEngine.connect(name, {team: 'red'})
    dispatch({type: LOGIN_WITH_USERNAME, payload: name});

    
    ChatEngine.on('$.ready', (data) => {
        console.log("Chat engine is ready!");
    });
  }
}

export const CreateChatChannel = (channelName) => async (dispatch) => {
  ChatEngine.on('$.ready', (data) => {
      console.log(channelName);
      new ChatEngine.Chat(channelName)
      console.log("new chat created")
      dispatch({type: CREATE_NEW_CHANNEL, payload: channelName});
  });
}