import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const MessageArea = ({route}) => {
  const {userName, messageText, messageTime} = route.params;
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      <View style={{position: 'absolute', bottom: 0}}>
        <Text style={styles.messageTime}>{messageTime}</Text>
        <Text style={styles.messageText}>{messageText}</Text>
      </View>
    </View>
  );
};

export default MessageArea;

const styles = StyleSheet.create({
  messageTime: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#8badbc',
  },
  messageText: {
    color: '#8badbc',
    margin: 30,
    marginTop: 10,
    padding: 14,
    borderWidth: 1,
    borderRadius: 40,
    borderBottomLeftRadius: 0,
    backgroundColor: '#055681',
  },
});
