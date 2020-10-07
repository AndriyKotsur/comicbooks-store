import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ProductList from '../../components/product-list';

class ProductViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
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
            throw err;
        }
    };

    addCart = () => {
        const productId = this.props.match.params.productId;
        this.props.history.push('/');
    };

    render() { 
        const { product } = this.state;
        console.log(product);

        return ( 
            <React.Fragment>
                <ProductList products={product} addCart={this.addCart} />
            </React.Fragment>
         );
    }
}
 
export default ProductViewer;