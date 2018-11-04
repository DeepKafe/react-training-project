import { ActionTypes } from '../constants';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_DATA:
            const { data } = action;
            return { ...state, data };

        default:
            return state
    }
}