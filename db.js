const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

const {DATABASE_URI} = require('./config');

mongoose.connect(DATABASE_URI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Database is connected');
});
mongoose.connection.on('disconnected', () => {
    console.log('Database is disconnected');
});
mongoose.connection.on('error', (err) => {
    console.log('Error:', err);
});