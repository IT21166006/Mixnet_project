const router = require("express").Router();
const Employee = require("../models/employee");


//add item
router.route("/add").post((req,res)=>{
    const firstname  =req.body.firstname;
    const LastName = req.body.LastName;
    const SureName = req.body.SureName;
    const aboutme = req.body.aboutme; 
    const number = req.body.number;
    const price =Number(req.body.price);
    const sPrice =Number(req.body.sPrice);
    const sdate = req.body.sdate;

    const newemployee = new Employee({

        firstname,
        LastName,
        SureName,
        aboutme,
        number,
        price,
        sPrice,
        sdate
 })
     newemployee.save().then(() => {
        res.json("employee added")
}).catch ((err)=>{
    console.log(err);
})

})
 
//read
router.route ("/").get((req,res) => {

    Employee.find().then((employee) => {   
        res.json(employee) 

    }).catch((err) => {
        console.log(err)
    })

})
//update
router.route ("/update/:id").put(async (req,res) => {
   let userId  = req.params.id;
   const {firstname,LastName,SureName,aboutme,number,price,sPrice,sdate} = req.body;
//user id must change
  const UpdateEmployee = {

    firstname,
    LastName,
    SureName,
    aboutme,
    number,
    price,
    sPrice,
    sdate


  }
  const update = await Employee.findByIdAndUpdate(userId,UpdateEmployee)
  .then(()=>{
   
  res.status(200).send ({status:"employee updated"})

  }).catch(()=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.massage});
  })
   
}) 
//delete
router.route("/delete/:id").delete(async(req,res)=>{
 let userId = req.params.id;
 
 
 await Employee.findByIdAndDelete(userId)
 .then(()=>{

    res.status(200).send({status:"employee deleted"});
 }).catch ((err)=>{
    console.log(err.massage);
    res.status(500).send({status:"error with deleting employees",error:err.massage});
 })
})

router.route("/get/:id").get(async(req,res)=>{
  let employeeid =req.params.id;
  console.log(employeeid)
  // const user = await employee.findbyId(employeeid)

  const employee = await Employee.findById(employeeid)
  .then((ob)=>{
    res.json({data:ob})
  })
  .catch((error)=>{
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
