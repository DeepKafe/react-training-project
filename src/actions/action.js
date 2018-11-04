import { ActionTypes, staffList } from '../constants';
import axios from 'axios';

export function checkLogin(login) {
  return {
    type: ActionTypes.LOGIN,
    login
  };
};

export function getStaff() {
  return {
    type: ActionTypes.GET_STAFF,
    staff: staffList
  };
};

export function updateStaff(staff) {
  return {
    type: ActionTypes.UPDATE_STAFF,
    staff
  };
};

export function fetchData() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      dispatch({
        type: ActionTypes.FETCH_DATA,
        data
      });
    } catch (error) {
      console.error('Error fetching', error);
      dispatch({
        type: ActionTypes.FETCH_DATA,
      });
    }
  };
}


