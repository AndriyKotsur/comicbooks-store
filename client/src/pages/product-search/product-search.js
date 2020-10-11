import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ProductsList from '../../components/products-list';

class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }
    }

    async componentDidMount() {
        try {
          const products = await axios.post(`http://localhost:5000/product/search${this.props.location.search}`)
          console.log(products);
          
          this.setState({
            products: products.data
          })

        } catch (err) {
            throw err
        }
    }

    showInfo = (productId) => {
        this.props.history.push(`/product/${productId}`)
    };
                

    render() { 
        const { products } = this.state;
        return ( 
            <Fragment>
                <ProductsList products={products} showInfo={this.showInfo} />
            </Fragment>
         );
    }
}
 
export default ProductSearch;