// Connect to MongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create employee schema
const employeeSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    SureName: {
        type: String,
        required: true
    },
    aboutme: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Education: {
        type: String,
        required: true
    },
    Certification: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    sdate: {
        type: Date,
        required: true
    },

    image: {
        type: String 
    }
});

// Create model for employee
const Employee = mongoose.model("Employee", employeeSchema); 

// Export module
module.exports = Employee;
