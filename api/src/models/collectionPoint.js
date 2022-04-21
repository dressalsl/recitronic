const mongoose = require('mongoose');


const CollectionPoint = mongoose.model('CollectionPoints',{

    active:Boolean,
    email: String,
    name: String,




});

module.exports = CollectionPoint
