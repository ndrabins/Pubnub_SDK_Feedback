import React, { Component } from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button, Text, Header} from 'react-native-elements';

import * as actions from '../actions';
import { connect } from 'react-redux';

class CreateChannelScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Create',
  };

  constructor(props) {
    super(props);

    this.state = {
      channelName: "",
    };
  }

  setChannelName(value) {
    this.setState({ channelName: value });
  }

  createChannel() {
    this.props.CreateChatChannel(this.state.channelName);
    this.props.navigation.navigate('Chat');
  }
  
  render() {
    return (
      <View>
         <Header
          centerComponent={{ text: 'CREATE CHANNEL', }} 
          backgroundColor={"#03A9F4"}
        />
        <View style={{marginTop:70}}>
          <FormInput 
            placeholder="Enter Chat Name"
            onChangeText={text => this.setChannelName(text)}
            value={this.state.channelName}
          />
          <Button
            onPress={() => this.createChannel()}
            title="Create Channel"
          />
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(CreateChannelScreen);
