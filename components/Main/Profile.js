import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View>
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
  },
  item: {
    margin: 5,
    borderBottomWidth: 1,
    padding: 10,
  },
  largeText: {
    fontSize: 20,
    color: 'black', 
  },
  smallText: {
    fontSize: 15,
  },
});
