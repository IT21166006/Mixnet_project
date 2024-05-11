const router = require("express").Router();
const Employee = require("../models/emp.js");
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




router.route("/createemp").post(upload.single("image"), (req, res) => {
  const { firstname,LastName,SureName,aboutme,number,email,Education,Certification,Skills,companyName,sdate} = req.body;
  const image = req.file.filename; // Get the filename of the uploaded image

  const newEmployee = new Employee({
    firstname,
    LastName,
    SureName,
    aboutme,
    number,
    email,
    Education,
    Certification,
    Skills,
    companyName,
    sdate,
    image
  });




  newEmployee.save().then(() => {
    res.json("Employee Added");
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
  const { firstname, LastName, SureName, aboutme, number, email, Education, Certification, Skills, companyName, sdate } = req.body;
  //user id must change
  const UpdateEmployee = {

    firstname,
    LastName,
    SureName,
    aboutme,
    number,
    email,
    Education,
    Certification,
    Skills,
    companyName,
    sdate


  }
  const update = await Employee.findByIdAndUpdate(userId, UpdateEmployee)
    .then(() => {

      res.status(200).send({ status: "employee updated" })

    }).catch(() => {
      console.log(err);
      res.status(500).send({ status: "error with updating data", error: err.massage });
    })

})
//delete
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;


  await Employee.findByIdAndDelete(userId)
    .then(() => {

      res.status(200).send({ status: "employee deleted" });
    }).catch((err) => {
      console.log(err.massage);
      res.status(500).send({ status: "error with deleting employees", error: err.massage });
    })
})

router.route("/get/:id").get(async (req, res) => {
  let employeeid = req.params.id;
  console.log(employeeid)
  // const user = await employee.findbyId(employeeid)

  const employee = await Employee.findById(employeeid)
    .then((ob) => {
      res.json({ data: ob })
    })
    .catch((error) => {
      res.json(error)
    })


})

//Search 

router.get('/search/:searchInput', async (req, res) => {
  try {
    const { searchInput } = req.params;
    const users = await Employee.find({
      $or: [
        { firstname: { $regex: searchInput, $options: 'i' } },



      ],
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
