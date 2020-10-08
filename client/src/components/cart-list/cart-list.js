import React, { Component, Fragment } from 'react';

const CartList = ({products, deleteProduct}) => {
    return(
        <Fragment>
            <div className="cart__inner">
                {
                    (products && products.length) ? (
                        product.map((product) => (
                            <div key={product._id}>
                                <div className="product__content">
                                    <img src={product.image} className="product__image"/>
                                    <h3 className="product__title">{product.title}</h3>
                                    <span className="product__price">{product.price} $</span>
                                    <button type="button" className="product__btn" onClick={() => deleteProduct(product._id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    ): ''
                }
            </div>
        </Fragment>
    )
};

export default CartList;