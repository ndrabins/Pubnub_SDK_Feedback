import Expo, { Constants } from "expo";
import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator
} from "react-navigation";


import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import CreateChannelScreen from "./screens/CreateChannelScreen";
import JoinChannelScreen from "./screens/JoinChannelScreen";
import UserSearchScreen from "./screens/UserSearchScreen";

import { Button } from "react-native-elements";

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        Login: {
          screen: LoginScreen
        },
        Chat: {
          screen: ChatScreen
        },
        CreateChannel:{
          screen: CreateChannelScreen
        },
      }, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: '#FFF',
        },
      });
      

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFF"
  }
});

Expo.registerRootComponent(App);
