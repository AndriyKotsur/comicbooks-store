import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

export default function authRequired(ProtectedComponent) {
    class Authorized extends Component {
        componentDidMount() {
            if(!localStorage.token) {
                this.props.history.push('/sign-in');
            }
        };

        getSnapshotBeforeUpdate() {
             if(!localStorage.token) {
                 this.props.history.push('/sign-in')
             }
        };

        componentDidUpdate() {
            if(!localStorage.token) {
                this.props.history.push('/sign-in')
            }
        };

        render() { 
            return ( 
                <ProtectedComponent {...this.props} />
             );
        }
    }
     
    return withRouter(Authorized);
}