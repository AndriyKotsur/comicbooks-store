import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import authRequired from '../../middleware/authRequired';
import './product-main.css'

import ProductRegister from '../product-register';
import ProductLogin from '../product-login';
import ProductsViewer from '../products-viewer';
import ProductViewer from '../product-viewer';
import ProductSearch from '../product-search';
import ProductProfile from '../product-profile';
import ProductCart from '../product-cart';
import ProductAdd from '../product-add/product-add';

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
            <Fragment>
                <header className="header">
                    <div className="container">
                        <div className="header__inner">
                            <Link to="/" className="header__logotype">
                                <img src="http://localhost:3000/assets/comic-book.svg" alt="Comic book store logotype" />
                            </Link>
                            {
                                !isAuthorized ? (
                                    <nav className="header__action">
                                        <Link to="/sign-up" className="header__action-register">
                                            Sign Up
                                        </Link>
                                        <Link to="/sign-in" className="header__action-login">
                                            Sign In
                                        </Link>
                                    </nav>
                                ): 
                                    <nav className="header__action">
                                        <Link to="/profile" className="header__action-profile">
                                            <img src="http://localhost:3000/assets/user.svg" alt="Comic book store logotype" />
                                            Profile
                                        </Link>
                                        <Link to="" onClick={this.logOut} className="header__action-logout">
                                            <img src="http://localhost:3000/assets/logout.svg" alt="Comic book store logotype" />
                                            Log Out
                                        </Link>
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
                        <Route path='/search' exact component={ProductSearch} />
                        <Route path='/profile' exact component={authRequired(ProductProfile)} />
                        <Route path='/add' exact component={ProductAdd} />
                        <Route path='/cart' exact component={authRequired(ProductCart)} />
                    </Switch>
                </div>
            </Fragment>
         );
    }
}
 
export default Main;