import React, { Component } from "react";
import { StyleSheet, View, ScrollView, FlatList, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Icon, Header, Text, FormInput } from "react-native-elements";

import * as actions from "../actions";
import { connect } from "react-redux";

import ChatEngineGravatar from "chat-engine-gravatar";

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
  }

  sendChat() {
    if (this.state.chatInput) {
      this.props.sendMessage(this.props.channelName, this.state.chatInput)
      console.log(this.state.chatInput);
      this.setState({ chatInput: "" });
    }
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.channelName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: `Chat channel - ${this.props.channelName}` }}
          backgroundColor={"#03A9F4"}
        />
        <View style={styles.messageContainer}>
          <ScrollView style={styles.messageList}>
            <FlatList
              data={this.state.messages}
              renderItem={({item}) =>
                <View style={styles.message}>
                  <Image style = {{ width: 100, height: 100 }} source = {{ uri: 'https:' + item.sender.state().gravatar, cache: 'reload' }} />
                  <Text style={styles.item}>{item.sender.uuid}: {item.data.text}</Text>
                </View>
                }
            />
          </ScrollView>
          <View style={styles.messageEntry}>

            <View style={{flex:1, flexDirection:"row", justifyContent:"center",}}>
              <FormInput
                placeholder="Enter Chat Message Here!"
                onChangeText={text => this.setChatInput(text)}
                value={this.state.chatInput}
                containerStyle={{width:"80%"}}
              />
              <Icon
                name='send'
                size={30}
                color='#03A9F4'
                onPress={() => {
                  this.sendChat();
                }} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ chatApp }) {
  return { username: chatApp.userName, channelName: chatApp.selectedChannel };
}

export default connect(mapStateToProps, actions)(ChatScreen);

const styles = StyleSheet.create({
  messageContainer:{
    flex: 1,
    paddingTop: 60
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  messageList: {
    flex: 0.5
  },
  messageEntry:{
    flex: 0.1,
    marginBottom: 10
  },
  message: {
    flex: 1,
    flexDirection: "column"
  },
});
