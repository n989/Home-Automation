import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Main/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DevicesScreen from './Main/AllDevices';
import ProfileScreen from './Main/Profile';
import MessageScreen from './Main/Messages';
import SmsAndroid from 'react-native-get-sms-android';
import AddDevice from './Main/AddDevice';
import {fetchUser} from '../redux/actions/user';
import {setIds} from '../redux/actions/user';
import {setMessages} from '../redux/actions/user';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
const Main = ({fetchUser, user, setIds, setMessages}) => {
  const Tab = createMaterialBottomTabNavigator();
  const filter = {
    box: 'inbox',
    read: 0,
    indexFrom: 0,
    maxCount: 1,
  };
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [oldDate, setOldDate] = useState('');
  const [messages, setMessage] = useState(user.messages);
  const [ids, setId] = useState(user.ids);
  const [devices, setDevices] = useState(user.devices);
  const onDevices = () => {
    axios
      .get(
        `https://blynk.cloud/external/api/isHardwareConnected?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh`,
      )
      .then(response => {
        console.log(response);
        if (response.data === true) {
          for (let i in devices) {
            axios
              .get(
                `https://blr1.blynk.cloud/external/api/update?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh&${devices[i]}=1`,
              )
              .then(res => {});
          }
        }
      });
  };
  const offDevices = () => {
    axios
      .get(
        `https://blynk.cloud/external/api/isHardwareConnected?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh`,
      )
      .then(response => {
        console.log(response);
        if (response.data === true) {
          for (let i in devices) {
            axios
              .get(
                `https://blr1.blynk.cloud/external/api/update?token=4n0G4lhNjNXKk2ERU1Nv9Z9P1MDlT_Oh&${devices[i]}=0`,
              )
              .then(res => {});
          }
        }
      });
  };

  const sendCommand = message => {
    console.log(message);
    if (message == 'tariff is high') {
      offDevices();
    }
    if (message == 'tariff is low') {
      onDevices();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (permissionGranted === true) {
        SmsAndroid.list(
          JSON.stringify(filter),
          fail => {
            console.log('Failed with this error: ' + fail);
          },
          (count, smsList) => {
            var arr = JSON.parse(smsList);
            arr.forEach(function (object) {
              if (!user.ids.includes(object._id)) {
                setIds(object._id);
                setMessages(object);
                sendCommand(object.body);
              }
            });
          },
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const requestSmsPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          {
            title: 'Sms Permission',
            message: 'Sms Permission ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermissionGranted(true);
        } else {
          setPermissionGranted(false);
          console.log('Sms permission denied');
        }
      } catch (err) {
        console.log(err);
      }
    };
    requestSmsPermission();
  }, []);
  useEffect(() => {
    fetchUser();
  }, []);

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
        component={AddDevice}
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
  bindActionCreators({fetchUser, setIds, setMessages}, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({});
