import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './product-register.css';


class ProductRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            password: ''
         }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const {name, email, password} = this.state;

        const newUser = {
            'name': name,
            'email': email,
            'password': password
        };

        try {
            const response = await axios.post(`http://localhost:5000/user/sign-up`, newUser);
            this.props.setUser(response.data.token);
            this.props.history.push('/');

        } catch (err) {
            throw err;
        }
    };  

    render() { 
        return ( 
            <Fragment>
                <div className="product__register">
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <input type="submit" value="Submit" className="form-submit"/>
                    </form>
                </div>
            </Fragment>
         );
    }
};
 
export default withRouter(ProductRegister);