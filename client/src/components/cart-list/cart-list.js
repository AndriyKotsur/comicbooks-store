import React, { Component, Fragment } from 'react';
import './cart-list.css';

const CartList = ({products, deleteProduct}) => {
    return(
        <Fragment>
            <div className="cart__inner">
                {
                    (products && products.length) ? (
                        products.map((product) => (
                            <div key={product._id} className="cart__item">
                                <img src={product.image} className="cart__image"/>
                                <div className="cart__content">
                                    <h3 className="cart__title">{product.title}</h3>
                                    <span className="cart__price">{product.price} $</span>
                                    <button type="button" className="cart__btn" onClick={() => deleteProduct(product._id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    ): <span className="cart__downloading text-warning">There is no comic books in the cart</span>
                }
            </div>
        </Fragment>
    )
};

export default CartList;