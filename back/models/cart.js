const mongoose = require('mongoose');

const cartScheme = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Title is required'],
        minlength: [6, 'Minimun length is 6 characters for title']
    },
    price: {
        type: Number,
        required: true,
        min: [10, 'Minimun price is 10 dollars for product']
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
        minlength: [10, 'Minimun length is 10 characters for description']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    user: {
        type: String,
        required: [true, 'Yser is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', cartScheme);