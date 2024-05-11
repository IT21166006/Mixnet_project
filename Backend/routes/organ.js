const router = require("express").Router();
const Organization = require("../models/organ.js");
const multer = require('multer');
const path = require('path');



// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Filename in uploads folder
  }
});

// Multer upload instance
const upload = multer({ storage: storage });



router.route("/register").post(upload.single("image"), (req, res) => {
  const { OrganName,oaddress,phoneNumber,oemail,number,aboutus} = req.body;
  const image = req.file.filename; // Get the filename of the uploaded image

  const neworganizations = new Employee({
    OrganName,
    oaddress,
    phoneNumber,
    oemail,
    number,
    aboutus,
  });


  neworganizations.save().then(() => {
    res.json(" Added organizations");
  }).catch((err) => {
    console.error(err);
  })
})


router.get("/", (req, res) => {
  Employee.find()
    .then((organizations) => {
      res.json(organizations);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve organizations" });
    });
});


//update
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { OrganName, oaddress, phoneNumber, oemail, aboutus } = req.body;
  //user id must change
  const Updateorganizations = {

    OrganName,
    oaddress,
    phoneNumber,
    oemail,
    aboutus
  
  }

  const update = await Employee.findByIdAndUpdate(userId, Updateorganizations)
  .then(() => {

    res.status(200).send({ status: "employee updated" })

  }).catch(() => {
    console.log(err);
    res.status(500).send({ status: "error with updating data", error: err.massage });
  })

})

// Read all organizations
router.get("/all", (req, res) => {
  Organization.find()
    .then((organizations) => {
      res.json(organizations);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve organizations" });
    });
});

// Update organization details
router.put("/update/:id", (req, res) => {
  const { OrganName, oaddress, phoneNumber, oemail, aboutus } = req.body;
  const organizationId = req.params.id;

  const updatedOrganization = {
    OrganName,
    oaddress,
    phoneNumber,
    oemail,
    aboutus
  };

  Organization.findByIdAndUpdate(organizationId, updatedOrganization)
    .then(() => {
      res.status(200).json({ status: "Organization updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to update organization" });
    });
});

// Delete organization
router.delete("/delete/:id", (req, res) => {
  const organizationId = req.params.id;

  Organization.findByIdAndDelete(organizationId)
    .then(() => {
      res.status(200).json({ status: "Organization deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete organization" });
    });
});

// Get organization by ID
router.get("/get/:id", (req, res) => {
  const organizationId = req.params.id;

  Organization.findById(organizationId)
    .then((organization) => {
      res.json({ data: organization });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve organization" });
    });
});

// Search organizations by name
router.get('/search/:searchInput', async (req, res) => {
  try {
    const { searchInput } = req.params;
    const organizations = await Organization.find({
      OrganName: { $regex: searchInput, $options: 'i' }
    });
    res.json(organizations);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to search organizations" });
  }
});

module.exports = router;
