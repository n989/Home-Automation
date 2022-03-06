import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigatior';
const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
