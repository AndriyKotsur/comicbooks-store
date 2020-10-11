import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileList from '../../components/profile-list/profile-list';

class ProductProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Link to="/add">Add product</Link>
                <ProfileList />
            </Fragment>
         );
    }
}
 
export default ProductProfile;