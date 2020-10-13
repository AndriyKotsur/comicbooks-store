const User = require('../models/user');
const Product = require('../models/product');
const {
    prepareToken,
    parseBearer
} = require('../middleware/token');

module.exports.getProfileProducts = function (req, res) {
    const userId = req.params.userId;

    if (userId) {
        User.findById(userId, async (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'Products have not been found'
                })
            } else {
                await user.populate('products').execPopulate()
                console.log(user.products);
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

module.exports.getProfileProductById = function (req, res) {
    const productId = req.params.productId;

    if (productId) {
        Product.findById(productId, (err, product) => {
            if (err) {
                return res.status(404).json({
                    message: 'Product has not been found'
                })
            } else {
                res.status(200).json(
                    product
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
    const decoded = parseBearer(req.headers.authorization, req.headers);

    const {
        title,
        price,
        description
    } = req.body;
    
    const image = req.file.location;

    if (!title || !price || !description || !image) {
        return res.status(400).json({
            message: "Please enter the required fields"
        })
    }
    const newProduct = new Product({
        title: title,
        price: price,
        description: description,
        image: image,
        user: decoded.id
    })
    newProduct.save((err) => {
        if (err) {
            return res.status(400).json({
                message: 'Product has not been created'
            })
        }
        res.status(200).json({
            message: 'Product has been successfully created'
        })
    })
};

module.exports.editProfileProduct = function (req, res) {
    const productId = req.params.productId;
    
    if (productId) {
        Product.findByIdAndUpdate(productId, {
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                image: req.file.location
            },
            (err, product) => {
                if (err) {
                    res.status(404).json({
                        message: 'Product has not been found'
                    })
                } else {
                    res.status(200).json({
                        message: 'Product has been successfully changed'
                    })
                }
            })
    } else {
        res.status(400).json({
            message: 'Bad request'
        })
    }
};

module.exports.deleteProfileProduct = function (req, res) {
    const productId = req.params.productId;

    if (productId) {
        Product.findByIdAndDelete(productId, (err) => {
            if (err) {
                res.status(404).json({
                    message: 'Product has not been found'
                })
            } else {
                res.status(204).json({
                    message: 'Product has been successfully deleted'
                })
            }
        })
    } else {
        res.status(400).json({
            message: 'Bad request'
        })
    }
};