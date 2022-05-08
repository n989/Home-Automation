import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RoomDevices = ({route}) => {
  console.log(route.params);
  return (
    <View style={{padding: 20}}>
      <Text>{route.params.room}</Text>
    </View>
  );
};

export default RoomDevices;

const styles = StyleSheet.create({});
