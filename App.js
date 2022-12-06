import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  PermissionsAndroid,
  Button,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './components/Main';
import SmsAndroid from 'react-native-get-sms-android';
import RoomDevices from './components/Main/RoomDevices';
import DisplayMessage from './components/Main/MessageArea';
import AllRooms from './components/Main/AllRooms';
import SignUp from './components/Main/SignUp';
import Login from './components/Main/Login';
import LandingScreen from './components/Main/Landing';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import Contact from './components/Main/Contact';
import About from './components/Main/About';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  return (
    <>
      {!loaded && (
        <View>
          <Text>Loading</Text>
        </View>
      )}
      {!loggedIn && (
        <Provider store={configureStore}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen
                name="Landing"
                component={LandingScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      )}
      {loggedIn && (
        <Provider store={configureStore}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RoomDevices"
                component={RoomDevices}
                options={({route}) => ({
                  title: route.params.room,
                  headerStyle: {
                    backgroundColor: '#062949',
                  },
                  headerTintColor: '#e6f9fa',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                })}
              />
              <Stack.Screen
                name="DisplayMessage"
                component={DisplayMessage}
                options={({route}) => ({
                  title: route.params.userName,
                  headerStyle: {
                    backgroundColor: '#062949',
                  },
                  headerTintColor: '#e6f9fa',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                })}
              />
              <Stack.Screen name="AllRooms" component={AllRooms} />
              <Stack.Screen
                name="Contact"
                component={Contact}
                options={({route}) => ({
                  title: 'Contact',
                  headerStyle: {
                    backgroundColor: '#062949',
                  },
                  headerTintColor: '#e6f9fa',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                })}
              />
              <Stack.Screen
                name="About"
                component={About}
                options={() => ({
                  title: 'About',
                  headerStyle: {
                    backgroundColor: '#062949',
                  },
                  headerTintColor: '#e6f9fa',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
