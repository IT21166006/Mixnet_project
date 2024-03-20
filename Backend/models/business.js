//connect mongo DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create business schema
const businessSchema = new Schema(
    {
    
        //business Name
        b_name : {
            type : String,
            required : true
        },
        //Item Name
        email : {
            type : String,
            required : true
        },

        //address
        address : {
            type : String,
            required : true
        },

        // business type
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
//create model to bussiness
const bussiness = mongoose.model("bussiness",businessSchema);

//export module
module.exports = bussiness;