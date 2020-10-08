const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Minimun length is 2 characters for username']
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: true,
        validate: function (value) {
            return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value))
        },
        message: props => `${props} is not valid email format`
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [1, 'Minimun length is 6 characters for password']
    }
}, {
    timestamps: true
});

userSchema.virtual('products', {
    ref: 'Cart',
    localField: '_id',
    foreignField: 'user'
});

module.exports = mongoose.model('User', userSchema);