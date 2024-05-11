const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // Import path module
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    
    useNewUrlParser: true,
    useUnifiedTopologyL:true,
    
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("\x1b[35m", "Mongodb Connection Success!", "\x1b[35m");

});


// Serve uploaded images statically
app.use("/Storage/AdvetisementUploads", express.static(path.join(__dirname, "Storage/AdvetisementUploads")));
app.use("/Storage/ProfileUploads", express.static(path.join(__dirname, "Storage/PostUploads")));

//Buisness Routs
const businessRouter = require("./routes/business.js");
app.use("/business",businessRouter);

//Buisness Routs
const AdvertisementRouter = require("./routes/businessAdd.js");
app.use("/advertisement",AdvertisementRouter);



app.listen(PORT, () => {
    console.log (`Server is up and running on port number: ${PORT}`)
})