import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Home from '../screens/Home/Home';
const Contacts = () => {
  return (
    <View>
      <Text>Contacts</Text>
    </View>
  );
};
const ContactDetails = () => {
  return (
    <View>
      <Text>ContactDetails</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Detail"
        component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
