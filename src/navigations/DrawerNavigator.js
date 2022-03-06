import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigatior';
import {NavigationContainer} from '@react-navigation/native';
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
