//connect mongo DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create emp schema
const empSchema = new Schema(
    {
    
        //organization
        org : {
            type : String,
            required : true
        },
        //phone
        mobile : {
            type : Number,
            required : true
        },

        //address
        address : {
            type : String,
            required : true
        },

        // about us
        about : {
            type : String,
            required :true
        },

    }
)
//create model to bidding
const employee = mongoose.model("employee",empSchema);

//export module
module.exports = employee;