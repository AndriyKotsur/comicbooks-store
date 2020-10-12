import React, {Fragment} from 'react';
import './products-list.css';

const ProductsList = ({products, showInfo}) => {

    return(
        <Fragment>
            <div className="products__inner">
                {
                    (products && products.length) ? (
                        
                        products.map((product) => (
                            <div key={product._id} className="products__item">
                                <div className="products__content">
                                    <img src={product.image} className="products__image"/>
                                    <h3 className="products__title">{product.title}</h3>
                                    <span className="products__price">{product.price} $</span>
                                    <button type="button" className="products__btn" onClick={() => showInfo(product._id)}>Details</button>
                                </div>
                            </div>
                        ))
                    ):<span className="products__warning text-warning">Loading...</span>
                }
            </div>
        </Fragment>
    )
};

export default ProductsList;