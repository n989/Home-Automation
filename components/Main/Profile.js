import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.item}>
        <Text style={styles.largeText}>Home</Text>
        <Text style={styles.smallText}>Manage your home settings</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.largeText}>Devices</Text>
        <Text style={styles.smallText}>
          Overview of all linked smart devices
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.largeText}>Contact Us</Text>
        <Text style={styles.smallText}>
          Having any trouble? Contact our support?
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.largeText}>About Us</Text>
        {/* <Text style={styles.smallText}>About </Text> */}
      </View>
    </View>
  );
};

export default Profile;

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
  },
  smallText: {
    fontSize: 15,
    color: '#8badbc',
  },
});
