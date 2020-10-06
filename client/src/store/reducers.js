import UserTypes from './action-types';

const userReducers = (state, action) => {
    switch (action.type) {
        case UserTypes.SET_USER:
            localStorage.setItem('token', action.payload)
            return {
                isAuthorized: true
            }
            case UserTypes.GET_USER:
                if (localStorage.getItem('token')) {
                    return {
                        isAuthorized: true
                    }
                } else {
                    return {
                        isAuthorized: false
                    }
                }
                case UserTypes.UNSET_USER:
                    localStorage.removeItem('token')
                    return {
                        isAuthorized: false
                    }
                    default:
                        return state;
    }
};

export default userReducers;