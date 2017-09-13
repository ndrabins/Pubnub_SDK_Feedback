import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { FormLabel, FormInput, Button, Text, } from 'react-native-elements';

import HTMLView from 'react-native-htmlview';

import * as actions from '../actions';
import { connect } from 'react-redux';

const htmlContent = `<p><em>italicized stuff</em></p>`;

class LoginScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    title: 'Login',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  constructor(props) {
    super(props);

    this.state = {
      loginName: "",
    };
  }

  login(value){
    this.props.LoginWithUsername(value);
    this.props.navigation.navigate('Chat');
  }  

  setLoginName(value) {
    this.setState({ loginName: value });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <HTMLView
          value={htmlContent}
          stylesheet={styles}
        /> */}
        <Text h1>PubNub Chat</Text>
        <FormInput 
          placeholder="Enter username"
          onChangeText={text => this.setLoginName(text)}
          value={this.state.chatInput}
        />
        <Button
          raised
          icon={{name: 'login', type: 'entypo'}}
          title='Login'
          onPress={() => this.login(this.state.loginName)}
        />
          
      </View> 
    );
  }
}


export default connect(null, actions)(LoginScreen);

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});