const mongoose = require('mongoose');


const CollectionPoints = mongoose.model('CollectionPoints',{

    email: String,
    name: String,



});

module.exports = CollectionPoints
