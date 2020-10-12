import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './product-list.css';

const ProductList = ({product, addCart, isAuthorized}) => {

    return(
        <Fragment>
            <div className="product__inner">
                {
                    product && (
                    <div key={product._id} className="product__item">
                        <img src={product.image} className="product__image"/>
                        <div className="product__content">
                            <h3 className="product__title">{product.title}</h3>
                            <span className="product__price">{product.price} $</span>
                            <p className="product__description">{product.description}</p>
                            {
                                !isAuthorized ?
                                    <Link to="/sign-in" className="product__warning text-warning">Sign in to add comic book to the cart</Link>
                                :
                                <>
                                    <button type="button" className="product__btn" onClick={() => addCart()}>Add cart</button>
                                </>
                            }
                        </div>
                    </div>
                    )
                }
                {
                    !product && (
                        <span className="product__loading text-warning">Loading...</span>
                    )
                }
            </div>
        </Fragment>
    )
};

export default ProductList;