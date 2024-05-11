//connect mongo DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create business schema
const advertisementSchema = new Schema(
    {
        //title
        title: {
            type:String,
            required:true
        },

        //image1
        image: {
            type: String,
        },

        // price
        price: {
            type: Number,
            required: true
        },

        //discription
        discription: {
            type: String,
            required: true
        },

        //image
        contact: {
            type: Number ,
            required : true
        },

        //auther
        auther:{
            type: String,
            required:true
        }

    }
)
//create model to bussiness
const advertisement = mongoose.model("advertisement", advertisementSchema);

//export module
module.exports = advertisement;