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
                            <div key={product._id} className="profile__item">
                                <div className="profile__content">
                                    <img src={product.image} className="profile__image"/>
                                    <h3 className="profile__title">{product.title}</h3>
                                    <span className="profile__price">{product.price} $</span>
                                    <div className="profile__group">
                                        <button type="button" className="profile__btn" onClick={() => editProduct(product._id)}>Edit</button>
                                        <button type="button" className="profile__btn" onClick={() => deleteProduct(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ): <span className="profile__downloading text-warning">There is no products in the profile</span>
                }
            </div>
        </Fragment>
    )
};

export default ProfileList;