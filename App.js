import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
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
const App = () => {
  const Stack = createNativeStackNavigator();
  const filter = {
    box: 'sent', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

    /**
     *  the next 3 filters can work together, they are AND-ed
     *
     *  minDate, maxDate filters work like this:
     *    - If and only if you set a maxDate, it's like executing this SQL query:
     *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
     *    - Same for minDate but with "date >= minDate"
     */
    minDate: 1649416408000, // timestamp (in milliseconds since UNIX epoch)
    maxDate: 1649589208000, // timestamp (in milliseconds since UNIX epoch)
    bodyRegex: '(.*)How are you(.*)', // content regex to match

    /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
    // read: 0, // 0 for unread SMS, 1 for SMS already read
    // _id: 1234, // specify the msg id
    // thread_id: 12, // specify the conversation thread_id
    // address: '+1888------', // sender's phone number
    body: 'How are you', // content to match
    /** the next 2 filters can be used for pagination **/
    indexFrom: 0, // start from index 0
    maxCount: 10, // count of SMS to return each time
  };
  useEffect(() => {
    const requestCameraPermission = async () => {
      console.log('useEffect run');
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          SmsAndroid.list(
            JSON.stringify(filter),
            fail => {
              console.log('Failed with this error: ' + fail);
            },
            (count, smsList) => {
              console.log('Count: ', count);
              console.log('List: ', smsList);
              var arr = JSON.parse(smsList);

              arr.forEach(function (object) {
                console.log('Object: ' + object);
                console.log('-->' + object.date);
                console.log('-->' + object.body);
              });
            },
          );
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.log(err);
      }
    };
    requestCameraPermission();
  }, []);
  return (
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
          options={{
            headerTitle: props => <Text style={{color: 'black'}}>Devices</Text>,
          }}
        />
        <Stack.Screen
          name="DisplayMessage"
          component={DisplayMessage}
          options={{
            headerTitle: props => (
              <Text style={{color: 'black'}}>Messages</Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
