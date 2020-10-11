import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ProductList from '../../components/product-list';
import  { getUser, unSetUser } from '../../store/action-creators';
import { connect } from 'react-redux';

class ProductViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId: ''
        }
    }

    async componentDidMount() {
        try {
            const productId = this.props.match.params.productId;
            const product = await axios.get(`http://localhost:5000/product/${productId}`);
            console.log(product);
            
            this.setState({
                product: product.data
            })
        } catch (err) {
            this.props.unSetUser()
        }
    };

    tokenCheck = async () => {
        try {
            const user = await axios.get('http://localhost:5000/user');
            console.log(user);

            this.setState({
                userId: user.data
            })
        } catch (err) {
            throw err
        }
    };

    addCart = async () => {
        try {
            await this.tokenCheck();
            const productId = this.props.match.params.productId;
            const { userId } = this.state;
            const user = JSON.stringify(userId);
            
            axios.post(`http://localhost:5000/cart/${productId}`, userId);

            this.props.history.push('/cart');
            
        } catch (err) {
            throw err
        }
    };

    render() { 
        this.props.getUser();
        const { product } = this.state;
        const { isAuthorized } = this.props;
        
        return ( 
            <Fragment>
                <ProductList product={product} addCart={this.addCart} isAuthorized={isAuthorized}/>
            </Fragment>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.isAuthorized
    }
}
 
export default connect(mapStateToProps, { getUser, unSetUser })(ProductViewer);