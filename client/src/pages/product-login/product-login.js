import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProductLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async (e) => {
        
        e.preventDefault();

        const {email, password} = this.state;
        const user = {
            'email': email,
            'password': password
        };

        try {
            const response = await axios.post(`http://localhost:5000/login`, user);
            this.props.setUser(response.data.token);
            this.props.history.push('/');

        } catch (err) {
            throw err;
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="transport-login-wrapper">
                    <form onSubmit={this.onSubmit} className="product__login">
                        <div>
                            <span>Email:</span>
                            <input type="email" name="email" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <div>
                            <span>Password:</span>
                            <input type="password" name="password" minLength="1" maxLength="15" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <input type="submit" value="Submit" className="form-submit"/>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default withRouter(ProductLogin);