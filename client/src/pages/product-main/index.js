import React from 'react';
import Main from './product-main';

import store from '../../store/store';
import {unSetUser, getUser} from '../../store/action-creators';
import { Provider, connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized
    }
};

let ConnectedMain = connect(mapStateToProps, {getUser, unSetUser})(Main);

export default () => (
    <Provider store={store}>
        <ConnectedMain />
    </Provider>
);