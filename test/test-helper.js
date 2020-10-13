const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


before((done)=>{
    mongoose.connect('mongodb://localhost:33017/user_test');

    mongoose.connection
        .once('open', () => {
            done();
        })
        .on('error', (error) => {
            console.warn('warning', error);
        });
    
});



beforeEach((done) => {
    mongoose.connection.collections.users.drop(()=>{
        // ready to run the next test
        done();
    });
});