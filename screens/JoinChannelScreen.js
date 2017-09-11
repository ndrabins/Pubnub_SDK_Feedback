import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

import { Button, Text, Header} from 'react-native-elements';

import * as actions from '../actions';
import { connect } from 'react-redux';

class JoinChannelScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Join',
  };

  joinChannel() {
    console.log("Joining channel");
    this.props.navigation.navigate('Chat');
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'JOIN CHANNEL', }} 
          backgroundColor={"#03A9F4"}
        />
        <View style={{marginTop:70}}>
          <Button
            onPress={() => this.joinChannel()}
            title="Join Channel"
          />
          <Text>CreateChannelScreen</Text>
          <Text>CreateChannelScreen</Text>
          <Text>CreateChannelScreen</Text>
          <Text>CreateChannelScreen</Text>
          <Text>CreateChannelScreen</Text>
          <Text>CreateChannelScreen</Text>
        </View>
      </View>
    );
  }
}

export default JoinChannelScreen;