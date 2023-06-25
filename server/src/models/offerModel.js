const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    price : {
       type : String,
       required : true
    },
    title : {
        type : String,
        required : true
     },
     image : {
      type : Buffer,
      contentType: String,
      required : true
     },
     offer : {
        type : String,
        required : true
     }
},{timestamps:true});

module.exports = mongoose.model('offer',offerSchema);