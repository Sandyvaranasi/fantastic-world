const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category : {
       type : String,
       required : true
    },
    title : {
        type : String,
        required : true
     },
     image : {
        type : String,
        required : true
     }
},{timestamps:true});

module.exports = mongoose.model('product',productSchema);