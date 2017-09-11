import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Icon, Header, Text} from 'react-native-elements';

import * as actions from '../actions';
import { connect } from 'react-redux';

import ChatEngineCore from 'chat-engine'
import ChatEngineGravatar from 'chat-engine-gravatar'

const ChatEngine = ChatEngineCore.create({
  publishKey: "pub-c-0fb6e2c9-c3fa-4dbc-9c8d-86a3813c73c8",
  subscribeKey: "sub-c-e3f6d3fe-934e-11e7-a7b2-42d877d8495e"
});


class ChatScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Chat',
    title: 'Chat',
  };

  constructor(props) {
    super(props);

    this.messages = [];

    this.state = {
      chatInput: "",
      messages : [],
    };
  }

  setChatInput(value) {
    this.setState({ chatInput: value });
  }

  sendChat() {
    if (this.state.chatInput) {
      this.state.lobby.emit("message", {
        text: this.state.chatInput
      });
      console.log(this.state.chatInput);
      this.setState({ chatInput: "" });
    }
  }

  componentDidMount() {
    // ChatEngine.connect(username, {
    //   signedOnTime: now,
    //   email: new Date()
    // });

    // ChatEngine.on("$.ready", data => {
    //   const me = data.me;
    //   console.log('ChatEngine ready to go!');
    //   me.plugin(ChatEngineGravatar());

    //   this.setState({
    //     lobby : new ChatEngine.Chat('lobby')
    //   })

    //   this.state.lobby.on("message", payload => {
    //     this.messages.push(payload);
    //     this.setState({
    //       messages: this.messages
    //     });
    //   });
    // });
  }

  render() {
    return (
      // <Button
      //   onPress={() => this.props.navigation.navigate('Login')}
      //   title="Go to Login"
      // />
      <View style={styles.container}> 
        <Header
          centerComponent={{ text: 'CHANNEL NAME', }} 
          backgroundColor={"#03A9F4"}
        />
        <View style={{marginTop:70}}>
          <Text>Chat Chat </Text>
          <Text>Chat Chat </Text>
          <Text>Chat Chat </Text>
          <Text>Chat Chat </Text>
          <Text>Chat Chat </Text>
          <Text>Chat Chat </Text>
          <Text>{this.props.username}</Text>
          <Text>Chat Chat </Text>
          <Text>Chat Chat </Text>
        </View>
      </View> 
    );
  }
}

function mapStateToProps({ chatApp }) {
  return { username: chatApp.userName };  
}

export default connect(mapStateToProps, actions)(ChatScreen);

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container:{
    flex:1,
    backgroundColor:"#FFF"
  }
});