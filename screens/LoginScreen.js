import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class LoginScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    title: 'Login',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Chat')}
          title="Go to chat"
        />
        <Text>Login Login Login </Text>
        <Text>Login Login Login </Text>
        <Text>Login Login Login </Text>
      </View> 
    );
  }
}
export default LoginScreen;


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});