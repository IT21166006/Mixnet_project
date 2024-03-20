//connect mongo DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create business schema
const businessSchema = new Schema(
    {
    
        //business ID
        b_name : {
            type : String,
            required : true
        },
        //Item Name
        email : {
            type : String,
            required : true
        },

        //Quantity
        address : {
            type : String,
            required : true
        },

        // business price
        type : {
            type : String,
            required :true
        },

        //discription
        discription : {
            type : String,
            required :true
        },

        //farmer Name
        //img : {
        //    type : String,
        //    required : true
        //},
    }
)
//create model to bidding
const bussiness = mongoose.model("bussiness",businessSchema);

//export module
module.exports = bussiness;