import React, { Component } from 'react';
import ProductLogin from './product-login';

import {Provider, connect} from 'react-redux';

import store from '../../store/store';
import {setUser} from '../../store/action-creators';

let ConnectedLogin = connect(null, {setUser})(ProductLogin);

export default () => (
    <Provider store={store}>
        <ConnectedLogin />
    </Provider>
);