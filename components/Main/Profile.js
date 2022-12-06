import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={{padding: 20, backgroundColor: '#062949', height: '100%'}}>
      <Text style={styles.heading}>Profile</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <View style={styles.item}>
          <Text style={styles.largeText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AllDevices');
        }}>
        <View style={styles.item}>
          <Text style={styles.largeText}>Devices</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Contact');
        }}>
        <View style={styles.item}>
          <Text style={styles.largeText}>Contact Us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('About');
        }}>
        <View style={styles.item}>
          <Text style={styles.largeText}>About Us</Text>
        </View>
      </TouchableOpacity>
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
    // marginLeft: 'auto',
    marginRight: 'auto',
  },
  smallText: {
    fontSize: 15,
    color: '#8badbc',
  },
});
