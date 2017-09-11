import Expo, { Constants } from "expo";
import React from "react";
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
        main: {
          screen: TabNavigator(
            {
              Chat: {
                screen: ChatScreen
              },
              Chat: {
                screen: ChatScreen
              }
            },
            {
              tabBarPosition: "bottom",
              animationEnabled: true,
              tabBarOptions: {
                labelStyle: { fontSize: 12 }
              }
            }
          )
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false,
        },
        lazyLoad: true
      }
    );

    return (
      <View style={styles.container}>
        <MainNavigator style={{ width: Dimensions.get("window").width }} />
      </View>
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
