const router = require("express").Router();
const Business = require("../models/business");

//----route of data insert(Business)----done
router.route("/create").post((req, res) => {
    const { bname, email, address, type, discription } = req.body;

    const newBusiness = new Business({
        bname,
        email,
        address,
        type,
        discription
    });

    newBusiness.save()
        .then(() => {
            res.json("Business Added");
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

//----route of read data(for Bidding Store)----done
router.route("/fetch/own/details").get((req, res) => {
    Business.find()
        .then(businesses => {
            res.json(businesses);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

module.exports = router;
