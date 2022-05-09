import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const MessageArea = ({route}) => {
  const {userName, messageText, messageTime} = route.params;
  return (
    <View style={{position: 'absolute', bottom: 0}}>
      <Text style={styles.messageTime}>{messageTime}</Text>
      <Text style={styles.messageText}>{messageText}</Text>
    </View>
  );
};

export default MessageArea;

const styles = StyleSheet.create({
  messageTime: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#666',
  },
  messageText: {
    color: '#666',
    margin: 30,
    marginTop: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    borderBottomLeftRadius: 0,
  },
});
