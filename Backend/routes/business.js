const router = require("express").Router();
const Business = require("../models/business");
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../Uploads")); // Destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Filename in uploads folder
    }
});

// Multer upload instance
const upload = multer({ storage: storage });

//----route of data insert(Business)----done
router.route("/createbusiness").post(upload.single("image"), (req, res) => {
    const {bname,email,address,type,discription} = req.body;
    const image = req.file.filename; // Get the filename of the uploaded image

    const newBusiness = new Business({
        bname,
        email,
        address,
        type,
        discription,
        image // Save the filename to the database
    });


    

    newBusiness.save().then(() => {
            res.json("Business Profile Created");
        }).catch((err) => {
            console.error(err);
    })
})

//----route of read data(all profiles)----done
router.route("/businesspofiles").get((req, res) => {
    Business.find()
        .then(businesses => {
            res.json(businesses);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

//----route of selected business----done
router.route("/select/:email").get(async (req, res) => {
    let Email = req.params.email;

    try {
        const selectedBusiness = await Business.findOne({ email: Email });
        if (!selectedBusiness) {
            return res.status(404).json({ error: "Business not found" });
        }
        res.json(selectedBusiness);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
