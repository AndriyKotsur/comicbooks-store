import React, {Fragment} from 'react';

const ProductsList = ({products, showInfo}) => {

    return(
        <React.Fragment>
            {
                (products && products.length) ? (
                    
                    products.map((product) => (
                        <div key={product._id} className="product__item">
                            <img src={product.image} className="product__image"/>
                            <div className="product__content">
                                <h3 className="product__title">{product.title}</h3>
                                <span className="product__price">{product.price} $</span>
                                <p className="product__description">{product.description}</p>
                                <button type="button" className="product__btn" onClick={() => showInfo(product._id)}>Show Details</button>
                            </div>
                        </div>
                    ))
                ): 'Loading'
            }
        </React.Fragment>
    )
};

export default ProductsList;