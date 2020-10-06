import React from 'react';
import ProductRegister from './product-register';

import {Provider, connect} from 'react-redux';

import store from '../../store/store';
import {setUser} from '../../store/action-creators';

let ConnectedRegister = connect(null, {setUser})(ProductRegister);

export default () => (
    <Provider store={store}>
        <ConnectedRegister />
    </Provider>
);