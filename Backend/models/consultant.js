const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consultantSchema = new Schema({

    username :{
        type : String,
        required:true
    },
    address : {
        type : String, 
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

const Consultant = mongoose.model("Consultant",consultantSchema);

module.exports = Consultant;  