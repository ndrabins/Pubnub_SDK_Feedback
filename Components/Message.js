import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";

import ChatEngineGravatar from "chat-engine-gravatar";

import HTMLView from 'react-native-htmlview';

const Message = (props) => {
  return (
    <View style={styles.messageContainer}>
      <Image
        style={{ width: 30, height: 30, paddingTop: 10 }}
        source={{
          uri: "https:" + props.message.sender.state().gravatar,
          cache: "reload"
        }}
      />
      <Text style={styles.message}>
        {props.message.sender.uuid}: 
      </Text>
      <HTMLView
        value={props.message.data.text}
        stylesheet={styles}
      />
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  message: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    fontSize: 18,
    height: 44
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row"
  }
});
