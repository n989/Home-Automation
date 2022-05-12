import {USER_STATE_CHANGE} from './types';
import {SET_USER} from './types';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
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
  console.log("action",data);
  return {
    type: SET_USER,
    payload: data,
  };
};
