import React, { Component, Fragment } from 'react';
import './profile-list.css';

const ProfileList = ({products, editProduct, deleteProduct}) => {
    console.log(products);
    return(
        <Fragment>
            <div className="profile__inner">
                {
                    (products && products.length) ? (

                        products.map((product) => (
                            <div key={product._id}>
                                <div className="product__content">
                                    <img src={product.image} className="product__image"/>
                                    <h3 className="product__title">{product.title}</h3>
                                    <span className="product__price">{product.price} $</span>
                                    <button type="button" className="product__btn" onClick={() => editProduct(product._id)}>Edit</button>
                                    <button type="button" className="product__btn" onClick={() => deleteProduct(product._id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    ): 'There is no products in the profile...'
                }
            </div>
        </Fragment>
    )
};

export default ProfileList;