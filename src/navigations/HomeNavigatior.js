import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
    <HomeStack.Navigator>
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name="Contact Detail" component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
