const router = require("express").Router();
const Organization = require("../models/organ.js");

// Register new organization
router.post("/register", (req, res) => {
  const { OrganName, oaddress, phoneNumber, oemail, aboutus } = req.body;

  const newOrganization = new Organization({
    OrganName,
    oaddress,
    phoneNumber,
    oemail,
    aboutus
  });

  newOrganization.save()
    .then(() => {
      res.json("Organization registered successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to register organization" });
    });
});

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
