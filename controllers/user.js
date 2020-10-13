const bcrypt = require('bcrypt');
const User = require('../models/user');
const {
    prepareToken,
    parseBearer
} = require('../middleware/token');

module.exports.getUser = function (req, res) {
    try {
        const decoded = parseBearer(req.headers.authorization, req.headers)
        res.status(200).json({
            id: decoded.id
        })
    } catch (e) {
        res.status(500).json({
            message: 'Token expired'
        })
    }
};

module.exports.deleteUser = function (req, res) {
    const {
        id
    } = req.params;

    if (id) {
        User.findByIdAndDelete(id, (err, user) => {
            if (err) {
                res.status(500).json({
                    message: 'User has not been deleted'
                })
            }
            res.status(204).json({
                message: 'User has not been deleted'
            })
        })
    } else {
        res.status(400).json({
            message: 'Bad request'
        })
    }
};

module.exports.signUpUser = function (req, res) {
    const {
        name,
        email,
        password
    } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'Please enter the required fields'
        });
    }
    User.findOne({
            email
        })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    message: 'User is already created'
                });
            }

            const newUser = new User({
                name,
                email,
                password
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            const token = prepareToken({
                                    id: user._id,
                                    name: user.name
                                },
                                req.headers
                            );
                            console.log(token);
                            return res.status(201).json({
                                result: 'Signed up',
                                token
                            });
                        })
                        .catch(() => {
                            return res.status(500).json({
                                error: 'Signup error'
                            });
                        })
                })
            })
        })
};

module.exports.loginUser = function (req, res) {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        res.status(400).json({
            message: 'Please enter the required fields'
        })
    }
    User.findOne({
            email
        })
        .exec()
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    message: 'Incorrect email address'
                })
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({
                            message: 'Incorrect email or password'
                        })
                    }
                    const token = prepareToken({
                            id: user._id,
                            name: user.name
                        },
                        req.headers
                    );
                    res.json({
                        result: 'User has been authorized',
                        token
                    });
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Login error'
                    })
                })
        })
};