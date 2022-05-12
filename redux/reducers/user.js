import {USER_STATE_CHANGE} from '../actions/types';

const initialState = {
  loggedIn: false,
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
