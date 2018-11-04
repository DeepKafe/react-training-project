import { ActionTypes } from '../constants';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_STAFF:
      return setStaff(state, action)

    case ActionTypes.UPDATE_STAFF:
      return updateStaff(state, action)

    default:
      return state
  }
}

function setStaff(state, action) {
  const { staff } = action;
  return [...staff];
}

function updateStaff(state, action) {
  const { staff } = action;
  return [...staff];
}
