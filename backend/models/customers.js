const mongoose = require('mongoose');

const Costumer  =  mongoose.model('Customer',{
    cust_name : {type:String},
    address:{type:String},
    phone_no:{type:Number}
});
module.exports = Costumer;