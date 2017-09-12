import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button, Text, Header} from 'react-native-elements';

import * as actions from '../actions';
import { connect } from 'react-redux';

class UserSearchScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Users',
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Users', }} 
          backgroundColor={"#03A9F4"}
        />
        <View style={{marginTop:70}}>
          <Text>UserSearchScreen</Text>
          <Text>UserSearchScreen</Text>
          <Text>UserSearchScreen</Text>
          <Text>UserSearchScreen</Text>
          <Text>UserSearchScreen</Text>
          <Text>UserSearchScreen</Text>
        </View>
      </View>
    );
  }


}

export default UserSearchScreen;