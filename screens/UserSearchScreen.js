import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button, Text, Header, List, ListItem} from 'react-native-elements';

import _ from 'lodash';

import * as actions from '../actions';
import { connect } from 'react-redux';

const list = [
  "value1", "value2",
]

class UserSearchScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Users',
  };

  getOnlineUsers()
  {
    console.log("User list");
    // console.log(this.props.users);
    let test = {
      something: {stuff:"stuff"},
      stuff: {stuff:"stuff"},
    }
    // test = this.props.users;
    console.log(test);
    
    let onlineUserList = _.map(test, (user, key) => {
      console.log("ITERATING");
      return (
        <ListItem
          key={key}
          title={"stuff"}
        />
      );
    });
    return onlineUserList;
  }

  render() {
    if(!this.props.currentChat){
      return (
        <View style={{marginTop:70}}>
          <Text> Join a channel to see users </Text>
        </View>
      );
    }

    return (
      <View>
        <Header
          centerComponent={{ text: `Users - ${this.props.channelName}`, }} 
          backgroundColor={"#03A9F4"}
        />
        <View style={{marginTop:70}}>
          <List>
          {
            this.getOnlineUsers()
          }
        </List>
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
    users: chatApp.users,
  };
}

export default connect(mapStateToProps, actions)(UserSearchScreen);
