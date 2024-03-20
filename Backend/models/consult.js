const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consultSchema = new Schema({

    name :{
        type : String,
        required:true
    },
    age : {
        type : Number, 
        required: true
    },
    mobilenumber:{
        type : Number,
        required: true
    },
    userName:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    vehicleType:{
        type : String,
        required: true
        
    },
    RePassword:{
        type : String,
        required: true
    }


})

const Consult = mongoose.model("Consult",consultSchema);

module.exports = Consult;  