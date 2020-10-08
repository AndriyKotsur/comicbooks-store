import React, {Fragment} from 'react';

const ProductsList = ({products, showInfo}) => {

    return(
        <Fragment>
            <div className="product__inner">
                {
                    (products && products.length) ? (
                        
                        products.map((product) => (
                            <div key={product._id} className="product__item">
                                <div className="product__content">
                                    <img src={product.image} className="product__image"/>
                                    <h3 className="product__title">{product.title}</h3>
                                    <span className="product__price">{product.price} $</span>
                                    <button type="button" className="product__btn" onClick={() => showInfo(product._id)}>Show Details</button>
                                </div>
                            </div>
                        ))
                    ): 'Loading'
                }
            </div>
        </Fragment>
    )
};

export default ProductsList;