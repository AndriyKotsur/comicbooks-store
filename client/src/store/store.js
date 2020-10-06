import {createStore} from 'redux';
import userReducers from './reducers';

let initialStore = {
    isAuthorized: false
};

export default createStore(userReducers, initialStore);