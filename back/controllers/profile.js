const User = require('../models/user');
const Product = require('../models/product');
const { decode } = require('jsonwebtoken');

module.exports.getProfileProducts = function (req, res) {
    const userId = req.params.userId;

    if (userId) {
        User.findById(userId, async (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'User has not been found'
                })
            } else {
                await user.populate('products').execPopulate()
                res.status(200).json(
                    user.products
                )
            }
        })
    } else {
        res.status(400).json({
            message: 'Bad request'
        })
    }
};

module.exports.addProfileProduct = function (req, res) {
    const productId = req.params.productId;

    if(!req.params || !req.body) {
        return res.status(400).json({
            message: 'Data has not been provided'
        })
    }

    Product.findById(productId, (err, product) => {
        if(err) {
            return res.status(404).json({
                message: 'Product has not been found'
            })
        } else {
            console.log(req.body);

            const newCartProduct = new Product({
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                user: req.body.id
            })

            newCartProduct.save((err) => {
                if(err) {
                    return res.status(500).json({
                        message: 'Internal error'
                    })
                } else {
                    return res.status(201).json({
                        message: 'The product has been added'
                    })
                }
            })
        }
    })
};

module.exports.deleteCartProduct = function (req, res) {
    const productId = req.params.productId;

    if (productId) {
        Cart.findByIdAndDelete(productId, (err) => {
            if (err) {
                res.status(404).json({
                    message: 'Product has not been found'
                })
            } else {
                res.status(204).json({
                    message: 'Product has been deleted'
                })
            }
        })
    } else {
        res.status(400).json({
            message: 'Bad request'
        })
    }
};