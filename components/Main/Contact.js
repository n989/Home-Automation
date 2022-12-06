import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Contact = ({navigation}) => {
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      <Text style={styles.heading}>Naveen Kumar Meena</Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e6f9fa',
    paddingBottom: 30,
  },
  item: {
    width: '100%',
    backgroundColor: '#055681',
    marginBottom: 10,
    borderRadius: 40,
    padding: 10,
  },
  largeText: {
    fontSize: 20,
    color: '#8badbc',
    // marginLeft: 'auto',
    marginRight: 'auto',
  },
  smallText: {
    fontSize: 15,
    color: '#8badbc',
  },
});
