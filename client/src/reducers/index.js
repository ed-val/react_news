import { combineReducers } from 'redux';
import authReducer from './authReducer';
import headerReducer from './headerReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  auth: authReducer,
  header: headerReducer,
  home: homeReducer,
});
