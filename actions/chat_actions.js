import {
  FETCH_MESSAGES,
  LOGIN_WITH_USERNAME,
  CREATE_NEW_CHANNEL,
  SEND_MESSAGE,
  TYPING_UPDATE
} from "../actions/types";

import ChatEngineCore from "chat-engine";
import ChatEngineGravatar from "chat-engine-gravatar";
import ChatEngineTypingIndicator from "chat-engine-typing-indicator";
import ChatEngineMarkdown from "chat-engine-markdown";
import ChantEngineOnlineUserSearch from "chat-engine-online-user-search";

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

    // // if this chat receives a message that's not from this sessions
    // chat.on('$.history.message', function(payload) {
    //     console.log('old message', payload)
    // });
  };
};

export const sendMessage = (chat, message) => {
  return dispatch => {
    const list = [
      "value1", "value2",
    ]

    console.log(list);

    console.log(Object.keys(chat.users));
    console.log("sending message");
    chat.emit("message", { text: message });
    dispatch({ type: SEND_MESSAGE });
  };
};

export const LoginWithUsername = name => {
  return dispatch => {
    console.log("Loggin in with " + name);
    const now = new Date().getTime();

    ChatEngine.connect(name, {
      signedOnTime: now,
      email: new Date()
    });

    dispatch({ type: LOGIN_WITH_USERNAME, payload: name });

    ChatEngine.on("$.ready", data => {
      console.log("Chat engine is ready!");
      const me = data.me;
      me.plugin(ChatEngineGravatar());

      ChatEngine.global.on('$.online.*', (payload) => {
        console.log("User online: " + payload.user.uuid);
      });
    });
  };
};

export const CreateChatChannel = channelName => async dispatch => {
  console.log(channelName);
  let currentChat = new ChatEngine.Chat(channelName);

  currentChat.plugin(ChatEngineMarkdown({}));
  currentChat.plugin(ChatEngineTypingIndicator({ timeout: 5000 }));
  currentChat.plugin(ChantEngineOnlineUserSearch({}));

  currentChat.on('$typingIndicator.startTyping', (payload) => {
    dispatch({
      type: TYPING_UPDATE, payload: payload.sender.uuid
    });
  });

  currentChat.on('$typingIndicator.stopTyping', (payload) => {
    dispatch({
      type: TYPING_UPDATE, payload: false
    });
  });

  // currentChat.on('$.online.*', (payload) => {
  //   console.log("User online: " + payload.user.uuid);
  // });



  // let users = currentChat.users;
  // console.log("new chat created");
  // console.log(currentChat);
  // console.log(users);

  dispatch({
    type: CREATE_NEW_CHANNEL,
    payload: channelName,
    currentChat: currentChat,
  });
};
