const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const qualificationSchema = new Schema({

    AreaOfAdvertise :{
        type : String,
        required:true
    },
    yearsOfExperiance : {
        type : Number, 
        required: true
    },
    education:{
        type : String,
        required: true
    },
    certification:{
        type : String,
        required: true
    },
    


})

const Qualification = mongoose.model("qualification",qualificationSchema);

module.exports = Qualification;  