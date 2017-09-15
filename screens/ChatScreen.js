import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Icon, Header, Text, FormInput } from "react-native-elements";

import * as actions from "../actions";
import { connect } from "react-redux";

import ChatEngineGravatar from "chat-engine-gravatar";

import Message from '../Components/Message';

class ChatScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Chat",
    title: "Chat"
  };

  constructor(props) {
    super(props);

    this.messages = [];

    this.state = {
      chatInput: "",
      messages: []
    };
  }

  setChatInput(value) {
    this.setState({ chatInput: value });

    if(value !== ""){
      this.props.currentChat.typingIndicator.startTyping();
    }else{
      this.props.currentChat.typingIndicator.stopTyping();
    }
    // this.props.currentChat.typingIndicator.startTyping()
  }

  sendChat() {
    if (this.state.chatInput) {
      let usersArray = Object.keys(this.props.currentChat.users);

      this.props.sendMessage(this.props.currentChat, this.state.chatInput);
      this.props.currentChat.typingIndicator.stopTyping();
      this.setState({ chatInput: "" });
      
    }
  }

  componentDidUpdate(prevProps) {
    // only update chart if the data has changed
    if (prevProps.channelName !== this.props.channelName) {
      this.props.fetchMessages(this.props.currentChat);
    }
  }

  render() {

    let typing = null;
    if (this.props.typing === false) {
      typing = (<Text>No one is typing</Text>);
    } else {
      typing = (<Text>{this.props.typing} is typing...</Text>);
    }

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: `Chat channel - ${this.props.channelName}` }}
          backgroundColor={"#03A9F4"}
        />
        <View style={styles.messageContainer}>
          <ScrollView style={styles.messageList}>
            <FlatList
              data={this.props.messages}
              renderItem={({ item }) => (
                <Message message={item} />
              )}
            />
          </ScrollView>
          <View style={styles.messageEntry}>
            {typing}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FormInput
                placeholder="Enter Chat Message Here!"
                onChangeText={text => this.setChatInput(text)}
                value={this.state.chatInput}
                containerStyle={{ width: "80%" }}
              />
              <Icon
                name="send"
                size={30}
                color="#03A9F4"
                onPress={() => {
                  this.sendChat();
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ chatApp }) {
  return {
    username: chatApp.userName,
    channelName: chatApp.selectedChannel,
    currentChat: chatApp.currentChat,
    messages: chatApp.messages,
    typing: chatApp.typing
  };
}

export default connect(mapStateToProps, actions)(ChatScreen);

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    paddingTop: 70
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  messageList: {
    flex: 0.5
  },
  messageEntry: {
    flex: 0.2,
    marginBottom: 5,
    paddingTop:10,
  },
});
