import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button, Text, Header, List, ListItem} from 'react-native-elements';

import * as actions from '../actions';
import { connect } from 'react-redux';

const list = [
  "value1", "value2",
]

class UserSearchScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Users',
  };

  getListItems(){
    let usersArray = Object.keys(this.props.currentChat.users);
    console.log(usersArray);
    let items = usersArray.map((item, i) => (
      <ListItem
        key={i}
        title={item}
      />
    ));
    return items;
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
          centerComponent={{ text: 'Users', }} 
          backgroundColor={"#03A9F4"}
        />
        <View style={{marginTop:70}}>
          <List>
          {
            this.getListItems()
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
  };
}

export default connect(mapStateToProps, actions)(UserSearchScreen);
