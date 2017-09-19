import React, { Component } from "react";
import { View } from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  Text,
  Header,
  List,
  ListItem
} from "react-native-elements";

import _ from "lodash";

import * as actions from "../actions";
import { connect } from "react-redux";

const list = ["value1", "value2"];

class UserSearchScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Users"
  };

  constructor(props) {
    super(props);

    this.state = {
      userSearchName: "",
      messages: []
    };
  }

  setSearchName(value) {
    this.setState({ userSearchName: value });
    this.props.findUsers(this.props.currentChat, value);
  }

  getOnlineUsers() {
    let onlineUserList = _.map(this.props.users, (user, key) => {
      console.log("ITERATING");
      return <ListItem key={key} title={user} />;
    });
    return onlineUserList;
  }

  render() {
    if (!this.props.currentChat) {
      return (
        <View style={{ marginTop: 70 }}>
          <Text> Join a channel to see users </Text>
        </View>
      );
    }

    return (
      <View>
        <Header
          centerComponent={{ text: `Users - ${this.props.channelName}` }}
          backgroundColor={"#03A9F4"}
        />
        <View style={{ marginTop: 70 }}>
          <FormInput
            placeholder="Enter Username Here!"
            onChangeText={text => this.setSearchName(text)}
            value={this.state.userSearchName}
            containerStyle={{ width: "80%" }}
          />
          <List>{this.getOnlineUsers()}</List>
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
    users: chatApp.users
  };
}

export default connect(mapStateToProps, actions)(UserSearchScreen);
