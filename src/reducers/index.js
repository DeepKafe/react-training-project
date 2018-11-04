import { combineReducers } from 'redux';
import staff from './staff';
import login from './login';
import data from './fetchData';

export default combineReducers({
  staff,
  login, 
  data
});
