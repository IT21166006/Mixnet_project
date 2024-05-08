//conect mongo db
const mongoose = require ("mongoose");
//const { required } = require('nodemon/lib/config');
 
const Schema = mongoose.Schema;
//creat employee schema
const OrganizationsSchema = new Schema({

    OrganName: {
        type : String,
        required : true
    },


    aboutus : {
        type : Number,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    oemail: {
        type :String,
        required : true
    },
    oaddress :{

        type : String,
        required : true
    },
    
})
//creat model to employee
const employeeo = mongoose.model("employee",OrganizationsSchema);
//eport module
module.exports = employeeo;