import {USER_STATE_CHANGE} from './types';
import {SET_USER} from './types';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {SET_IDS} from './types';
import {SET_MESSAGES} from './types';
import {SET_DEVICE} from './types';

export const fetchUser = data => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          dispatch({type: USER_STATE_CHANGE, payload: snapshot.data()});
        } else {
          console.log('Does not exist');
        }
      });
  };
};

export const setUser = data => {
  return {
    type: SET_USER,
    payload: data,
  };
};
export const setDevice = data => {
  return {
    type: SET_DEVICE,
    payload: data,
  };
};

export const setIds = data => {
  return {
    type: SET_IDS,
    payload: data,
  };
};
export const setMessages = data => {
  return {
    type: SET_MESSAGES,
    payload: data,
  };
};
