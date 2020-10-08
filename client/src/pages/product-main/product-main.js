import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import authRequired from '../../middleware/authRequired';
import './product-main.css'

import ProductRegister from '../product-register';
import ProductLogin from '../product-login';
import ProductsViewer from '../products-viewer';
import ProductViewer from '../product-viewer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    logOut = () => {
        this.props.unSetUser();
    };

    render() { 
        this.props.getUser();
        const {isAuthorized} = this.props;

        return (
            <React.Fragment>
                <header className="header">
                    <div className="container">
                        <div className="header__inner">
                            <Link to="/">
                                <img src="http://localhost:3000/public/assets/comic-book.svg" alt="Comic book store logotype" />
                            </Link>
                            {
                                !isAuthorized ? (
                                    <nav className="header__action">
                                        <Link to="/sign-up">Sign Up</Link>
                                        <Link to="/sign-in">Sign In</Link>
                                    </nav>
                                ): 
                                    <nav className="header__action">
                                        <Link to="/profile">Profile</Link>
                                        <Link to="" onClick={this.logOut}>Log Out</Link>
                                    </nav>
                            }
                        </div>
                    </div>
                </header>

                <div className="container">
                    <Switch>
                        <Route path='/sign-up' exact component={ProductRegister} />
                        <Route path='/sign-in' exact component={ProductLogin} />
                        
                        <Route path='/' exact component={ProductsViewer} />
                        <Route path='/product/:productId' exact component={ProductViewer} />
                    </Switch>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Main;