const mongoose = require('mongoose');


const User = mongoose.model('User',{

    active:Boolean,
    email: String,
    name: String,
    password: String,


});

module.exports = User
