import React, { Component, Fragment } from 'react';
import ProductList from '../../components/products-list';
import axios from 'axios';
import './products-viewer.css';

class ProductsViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }
    }

    async componentDidMount() {
        try {
            const products = await axios.get('http://localhost:5000/product');

            this.setState({
                products: products.data
            })
        } catch (err) {
            throw err;
        }
    };

    showInfo = (productId) => {
        
        this.props.history.push(`/product/${productId}`)
    };

    render() { 
        const {products} = this.state;
        console.log(products);
        
        return ( 
            <React.Fragment>
                <ProductList products={products} showInfo={this.showInfo} />
            </React.Fragment>
         );
    }
};
 
export default ProductsViewer;