import { ActionTypes } from '../constants';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return checkLogin(state, action)

        default:
            return state
    }
}

function checkLogin(state, action) {
    const { login } = action;
    login.success = false;
    if (login.username === 'admin' && login.password === '123456') {
        login.success = true;
    }
    return { ...login };
}