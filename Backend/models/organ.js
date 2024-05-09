const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrganizationsSchema = new Schema({
    OrganName: {
        type: String,
        required: true
    },
    aboutus: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    oemail: {
        type: String,
        required: true
    },
    oaddress: {
        type: String,
        required: true
    }
});

const Organization = mongoose.model("Organization", OrganizationsSchema);

module.exports = Organization;
