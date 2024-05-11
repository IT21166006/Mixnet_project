const router = require("express").Router();
const Advertisement = require("../models/businessAdd");
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../Storage/AdvetisementUploads")); // Destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Filename in uploads folder
    }
});

// Multer upload instance
const upload = multer({ storage: storage });

//----route of data insert(Business)----done
router.route("/postadd").post(upload.single("image"), (req, res) => {
    const {title,price,discription,contact,auther } = req.body;
    const image = req.file.filename; // Get the filename of the uploaded image

    const newAdvertisement = new Advertisement({
        title,
        image,// Save the filename to the database
        price,
        discription,
        contact,
        auther
    });


    

    newAdvertisement.save().then(() => {
            res.json("Advertisement post Succesfull");
        }).catch((err) => {
            console.error(err);
    })
})

//----route of read data(all profiles)----done
router.route("/allpost").get((req, res) => {
    Advertisement.find()
        .then(Advertisement => {
            res.json(Advertisement);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});


module.exports = router;
