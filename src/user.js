const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
        
    },
    postCount: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;