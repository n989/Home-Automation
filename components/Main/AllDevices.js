import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const AllDevices = () => {
  return (
    <View style={{margin: 20}}>
      <Text style={styles.heading}>12 Devices</Text>
      <Text>Connected</Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default AllDevices;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
});
