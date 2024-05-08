//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat employee schema
const employeeSchema = new Schema({

    firstname: {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true

    },
    SureName :{
        type :String,
        required : true
    },

    aboutme : {
        type : Number,
        required : true
    },
    number : {
        type : Number,
        required : true
    },
    email: {
        type :String,
        required : true
    },
    Education :{

        type : String,
        required : true
    },
    Cetification :{

        type : String,
        required : true
    },
    Skills :{

        type : String,
        required : true
    },

    companyName :{

        type : String,
        required : true
    },
    companyName :{

        type : String,
        required : true
    },
    
})
//creat model to employee
const employee = mongoose.model("employee",employeeSchema);
//eport module
module.exports = employee;