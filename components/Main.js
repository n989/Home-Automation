import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Main/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DevicesScreen from './Main/AllDevices';
import ProfileScreen from './Main/Profile';
import MessageScreen from './Main/Messages';
import SmsAndroid from 'react-native-get-sms-android';

import {fetchUser} from '../redux/actions/user';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const Main = ({fetchUser, user}) => {
  const Tab = createMaterialBottomTabNavigator();

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
  useEffect(() => {
    fetchUser();
  }, []);
  console.log('hello ', user.userDetails);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={false}
      barStyle={{backgroundColor: '#2a5298'}}
      activeColor="#f9fafc"
      inactiveColor="#8093bb">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AllDevices"
        component={DevicesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="devices" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddContainer"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="android-messages"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const mapStatetoProps = store => {
  return {
    user: store.users,
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchUser}, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(Main);

// export default Main;

const styles = StyleSheet.create({});
