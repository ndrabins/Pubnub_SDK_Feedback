import React, { Component } from "react";
import { View } from "react-native";

import { Button, Text } from "react-native-elements";

class CreateChannelScreen extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="Go to Login"
        />
        <Text>CreateChannelScreen</Text>
        <Text>CreateChannelScreen</Text>
        <Text>CreateChannelScreen</Text>
        <Text>CreateChannelScreen</Text>
        <Text>CreateChannelScreen</Text>
        <Text>CreateChannelScreen</Text>
      </View>
    );
  }
}

export default CreateChannelScreen;
