import React from 'react';
import {createDrawerNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigatior';
const DrawerNavigator = () => {
  const HomeStack = createDrawerNavigator();
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
      </Drawer.Navigator>

  )
};

export default DrawerContainer;
