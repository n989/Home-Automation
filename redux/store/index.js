import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from '@reduxjs/toolkit/dist/devtoolsExtension';
import userReducer from '../reducers/user';

const rootReducer = combineReducers({
  users: userReducer,
});

const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default configureStore;
