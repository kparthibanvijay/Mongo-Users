const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:33017/user_test');

mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error', (error) => {
        console.warn('warning', error);
    });
