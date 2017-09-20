import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME,
  CREATE_NEW_CHANNEL,
  SEND_MESSAGE,
  TYPING_UPDATE,
  ONLINE_USER,
  FIND_USERS
} from "../actions/types";

import ChatEngineCore from "chat-engine";
import ChatEngineGravatar from "chat-engine-gravatar";
import ChatEngineTypingIndicator from "chat-engine-typing-indicator";
import ChatEngineMarkdown from "chat-engine-markdown";
import ChatEngineOnlineUserSearch from "chat-engine-online-user-search";
import ChatEngineUploadCare from "chat-engine-uploadcare";
import ChatEngineRandomUserName from "chat-engine-random-username";

import _ from "lodash";

const ChatEngine = ChatEngineCore.create({
  publishKey: "pub-c-0fb6e2c9-c3fa-4dbc-9c8d-86a3813c73c8",
  subscribeKey: "sub-c-e3f6d3fe-934e-11e7-a7b2-42d877d8495e"
});

export const fetchMessages = chat => {
  return dispatch => {
    chat.on("message", payload => {
      console.log(payload);
      dispatch({ type: FETCH_MESSAGES, payload: payload });
    });
  };
};

export const sendMessage = (chat, message) => {
  return dispatch => {
    console.log(ChatEngine.global);
    chat.emit("message", { text: message });
    dispatch({ type: SEND_MESSAGE });
  };
};

export const LoginWithUsername = name => {
  return dispatch => {
    const now = new Date().getTime();

    ChatEngine.connect(name, {
      signedOnTime: now,
      email: new Date()
    });


    ChatEngine.on("$.ready", data => {
      console.log("Chat engine is ready!");
      const me = data.me;
      me.plugin(ChatEngineGravatar());

      let users = ChatEngine.global.users;

      if(users.hasOwnProperty(name)){
        //give user a random username
        me.plugin(ChatEngineRandomUserName(ChatEngine.global));
        console.log(me);

        //replace chosen name with random one
        dispatch({ type: LOGIN_WITH_USERNAME, payload: me.state().username });
      } else {
        console.log( me.state().username);
        console.log("users list does not contain " + name);
        dispatch({ type: LOGIN_WITH_USERNAME, payload: name });
      }
      console.log(users);

      // ChatEngine.global.on('$.online.*', (payload) => {
      //   let userUid = payload.user.uuid;
      //   let user = { userUid : true}

      //   console.log("User online: " + payload.user.uuid);
      //   dispatch({ type: ONLINE_USER, payload: name });
      // });
    });
  };
};

export const findUsers = (chat, name) => {
  // chat.plugin(ChatEngineOnlineUserSearch({}));
  // ChatEngine.global.plugin(ChatEngineOnlineUserSearch({}));
  // let usersFound = ChatEngine.global.onlineUserSearch.search("test");
  let usersFound = chat.onlineUserSearch.search(name);
 
  return dispatch => {
    dispatch({
      type: FIND_USERS,
      payload: ['bobby','timmy'],
    });
  }
}

export const CreateChatChannel = channelName => async dispatch => {
  let chat = new ChatEngine.Chat(channelName);

  chat.plugin(ChatEngineMarkdown({}));
  chat.plugin(ChatEngineTypingIndicator({ timeout: 5000 }));
  chat.plugin(ChatEngineOnlineUserSearch({}));
  // chat.plugin(ChatEngineUploadCare({}));


  // Set typing listeners on chat
  chat.on('$typingIndicator.startTyping', (payload) => {
    dispatch({
      type: TYPING_UPDATE, payload: payload.sender.uuid
    });
  });

  chat.on('$typingIndicator.stopTyping', (payload) => {
    dispatch({
      type: TYPING_UPDATE, payload: false
    });
  });

  //set fileupload on chat
  // chat.on('$uploadcare.upload', (payload) => {
  //   console.log('upload', payload.data.cdnUrl, 'from', payload.sender.uuid);
  // });


  dispatch({
    type: CREATE_NEW_CHANNEL,
    payload: channelName,
    currentChat: chat,
  });
};
