import {USER_STATE_CHANGE} from '../actions/types';
import {SET_USER} from '../actions/types';

const initialState = {
  loggedIn: false,
  currentUser: null,
  userDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_USER: {
      console.log('payload', action.payload);
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
