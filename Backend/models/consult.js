const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consultSchema = new Schema({

    username :{
        type : String,
        required:true
    },
    address : {
        type : Number, 
        required: true
    },
    age:{
        type : Number,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    


})

const Consult = mongoose.model("Consult",consultSchema);

module.exports = Consult;  