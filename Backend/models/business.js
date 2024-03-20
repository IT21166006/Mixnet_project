//connect mongo DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create bidding schema
const businessSchema = new Schema(
    {
    
        //business ID
        bidID : {
            type : String,
            required : true
        },
        //Item Name
        itemName : {
            type : String,
            required : true
        },

        //Quantity
        quantity : {
            type : Number,
            required : true
        },

        // Minimum Bid Price
        price : {
            type : Number,
            required :true
        },

        setPrice : {
            type : Number,
            required :true
        },

        //farmer Name
        idNo : {
            type : String,
            required : true
        },

        //Farm Name
        farm : {
            type : String,
            required : true
        },

        phone : {
            type : Number,
            required :true
        },

        cusName : {
            type : String,
            required :true
        },

        cusPhone : {
            type : String,
            required :true
        }
    }
)
//create model to bidding
const bussiness = mongoose.model("bussiness",businessSchema);

//export module
module.exports = bussiness;