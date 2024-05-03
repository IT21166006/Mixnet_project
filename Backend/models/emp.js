//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat employee schema
const employeeSchema = new Schema({

    famer: {
        type : String,
        required : true
    },
    ItemName : {
        type : String,
        required : true

    },
    ItemId :{
        type :String,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },
    re_order_level : {
        type : String
    },
    price: {
        type :Number,
        required : true
    },
    sdate :{

        type : String,
        required : true
    },
    sPrice :{

        type : Number,
        required : true
    },
    
})
//creat model to employee
const employee = mongoose.model("employee",employeeSchema);
//eport module
module.exports = employee;