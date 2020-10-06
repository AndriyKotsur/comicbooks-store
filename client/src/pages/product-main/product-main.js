import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import ProductRegister from '../product-register';
import ProductLogin from '../product-login';
import ProductsViewer from '../products-viewer';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <header className="header">
                    Welcome to the Home Page
                </header>
                <div>
                    <Switch>
                        <Route path='/sign-up' exact component={ProductRegister} />
                    </Switch>
                    <Switch>
                        <Route path='/sign-in' exact component={ProductLogin} />
                    </Switch>

                    <Switch>
                        <Route path='/' exact component={ProductsViewer} />
                    </Switch>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Main;