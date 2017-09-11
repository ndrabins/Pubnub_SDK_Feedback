import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { FormLabel, FormInput, Button, Text, } from 'react-native-elements';

import * as actions from '../actions';
import { connect } from 'react-redux';

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

  componentDidMount(){
    
  }

  login(value){
    this.props.LoginWithUsername(value);
    this.props.navigation.navigate('Chat');
    console.log("Logging in");
  }  

  setLoginName(value) {
    this.setState({ loginName: value });
    console.log(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h1>Login</Text>
        <FormInput 
          placeholder="Enter Chat Name"
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
  }
});