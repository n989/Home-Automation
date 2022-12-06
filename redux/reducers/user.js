import {add} from 'react-native-reanimated';
import {act} from 'react-test-renderer';
import {USER_STATE_CHANGE} from '../actions/types';
import {SET_USER} from '../actions/types';
import {SET_IDS} from '../actions/types';
import {SET_DEVICE} from '../actions/types';
import {SET_MESSAGES} from '../actions/types';

const initialState = {
  loggedIn: false,
  currentUser: null,
  userDetails: null,
  messages: {},
  ids: [],
  devices: ['d11', 'd12', 'd13'],
  list: {
    'Living Room': [
      {
        id: 0,
        deviceName: 'Led',
        deviceRoom: 'Living Room',
        status: 0,
        pin: 'd13',
      },
      {
        id: 1,
        deviceName: 'Bulb',
        deviceRoom: 'Living Room',
        status: 0,
        pin: 'd12',
      },
      {
        id: 2,
        deviceName: 'Fan',
        deviceRoom: 'Living Room',
        status: 0,
        pin: 'd11',
      },
    ],
  },
  allList: [
    {
      id: 0,
      deviceName: 'Led',
      deviceRoom: 'Living Room',
      status: 0,
      pin: 'd13',
    },
    {
      id: 1,
      deviceName: 'Bulb',
      deviceRoom: 'Living Room',
      status: 0,
      pin: 'd12',
    },
    {
      id: 2,
      deviceName: 'Fan',
      deviceRoom: 'Living Room',
      status: 0,
      pin: 'd11',
    },
  ],
  smsPermission: '',
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_USER: {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    case SET_MESSAGES: {
      console.log(initialState.messages);
      var temp = initialState.messages;
      var address = action.payload.address;
      if (typeof temp[address] === 'undefined') temp[address] = [];
      console.log('add', temp[address], address);
      // temp[address] = [];
      temp[address].push(action.payload);
      return {
        ...state,
        messages: temp,
      };
    }
    case SET_IDS: {
      var temp = initialState.ids;
      temp.push(action.payload);
      return {
        ...state,
        ids: temp,
      };
    }
    case SET_DEVICE: {
      const {deviceName, roomName, pin} = action.payload;
      var newDevices = initialState.devices;
      newDevices.push(action.payload.pin);
      console.log(initialState.allList.length);
      var nd = {
        id: initialState.allList.length,
        deviceName: action.payload.deviceName,
        deviceRoom: action.payload.roomName,
        status: 0,
        pin: action.payload.pin,
      };
      var newl = initialState.allList;
      newl.push(nd);
      var d = initialState.list;
      if (d[action.payload.roomName]) d[action.payload.roomName].push(nd);
      else d[action.payload.roomName] = [nd];

      return {
        ...state,
        devices: newDevices,
        list: d,
        allList: newl,
      };
    }
    default:
      return state;
  }
};

export default detailReducer;
