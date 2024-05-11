//connect mongo DB
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create business schema
const advertisementSchema = new Schema(
    {
        //title
        title: {
            type:String,
        },

        //image1
        image: {
            type: String,
        },

        // price
        price: {
            type: Number,
        },

        //discription
        discription: {
            type: String,
        },

        //image
        contact: {
            type: Number ,
        },

        //auther
        auther:{
            type: String,
        }

    }
)
//create model to bussiness
const advertisement = mongoose.model("advertisement", advertisementSchema);

//export module
module.exports = advertisement;