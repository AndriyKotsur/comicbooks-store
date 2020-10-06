import UserTypes from './action-types';

export function setUser(token) {
    return {
        type: UserTypes.SET_USER,
        payload: token
    }
};

export function getUser() {
    return {
        type: UserTypes.GET_USER
    }
};

export function unSetUser() {
    return {
        type: UserTypes.UNSET_USER
    }
};