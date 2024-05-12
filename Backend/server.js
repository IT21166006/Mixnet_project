const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 8080; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})




const empRouter = require("./routes/emp.js");
app.use("/emp",empRouter);

const organRouter = require("./routes/organ.js");
app.use("/organ",organRouter);

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve uploaded images statically
app.use("/storages", express.static(path.join(__dirname, "storages")));
app.use("/storages", express.static(path.join(__dirname, "storages")));



app.listen(PORT, () => {
    console.log (`Server is up and running on port number: ${PORT}`)
})