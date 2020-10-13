const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

/* Database */
require('./db');
const {
    DATABASE_NAME,
    PORT
} = require('./config');

console.log(`Database is name ${DATABASE_NAME}`);

/* Routes */
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const profileRouter = require('./routes/profile');
const cartRouter = require('./routes/cart');

/* Middlewares */
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);
app.use('/cart', cartRouter);

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'stage') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

app.get('*', (req, res) => {
    res.status(200).json({
        message: 'Bad request'
    });
});

app.listen(PORT || 8181, () => {
    console.log(`Server started on port ${PORT || 8181}`);
});

module.exports = app;