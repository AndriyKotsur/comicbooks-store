import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import './product-login.css'

class ProductLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            isError: ''
         }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = async (e) => {
        
        e.preventDefault();

        const {email, password, isError} = this.state;
        const user = {
            'email': email,
            'password': password
        };

        try {
            const response = await axios.post(`/user/sign-in`, user);
            this.props.setUser(response.data.token);
            this.props.history.push('/');
            
        } catch (err) {
            this.setState({
                isError: err.response.data
            })
        }
    }

    render() {
        const { isError } = this.state;

        return ( 
            <Fragment>
                <div className="product__login">
                    <form onSubmit={this.onSubmit} className="form">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" minLength="1" maxLength="15" onChange={this.onChange} className="form-input" required/>
                        </div>
                        <input type="submit" value="Submit" className="form-submit"/>
                    </form>
                    {
                        isError && (
                        <p className="form-error">{isError.message}</p>
                        )
                    }
                    <p className="form-warning">Already have an account?<Link to="/sign-up" className="form-link">Sign up</Link></p>
                </div>
            </Fragment>
         );
    }
}
 
export default withRouter(ProductLogin);