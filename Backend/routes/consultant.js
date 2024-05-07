const router = require("express").Router();
let consultant = require("../models/consultant")



//crud -> create method
//http://localhost:8070/consultant/add
router.route("/add").post((req,res)=>{

    const username = req.body.username;
    const address = req.body.address;
    const age = Number(req.body.age);
    const email = req.body.email;
    

    

    // object create
    const newConsultant = new consultant({
        username,
        address,  
        age,
        email

    })
    
    
    newConsultant.save().then(()=>{ 
        res.json("consultant Added")
    }).catch((err)=>{
        console.log(err);
        res.json("error")
    })   

})



//http://localhost:8070/consultant/display
router.route("/display").get((req,res)=>{

    consultant.find().then((consultant)=>{  
        res.json(consultant)
    }).catch((err)=>{
        console.log(err)
    }) 

})

//update
//http://localhost:8070/person/update/64316bbc02cc8c3d90d151ed
router.route("/update/:id").put(async(req,res) =>{
    let userId = req.params.id; 
    const{name, address, age, email} = req.body; 

    const updateConsultant = { 
        name,
        address,
        age,
        email
        
    }

    const update = await consultant.findByIdAndUpdate(userId,updateConsultant).then(()=>{      
        res.status(200).send({status:"User updated"})
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message}); 
    })
    
     
}) 

//delete
//http://localhost:8070/person/delete/64316bbc02cc8c3d90d151ed
router.route("/delete/:id").delete(async(req,res) =>{
    let userID =req.params.id;

    await consultant.findByIdAndDelete(userID).then(() =>{
        res.status(200).send({status: "consultant deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});
    })
})


//http://localhost:8070/person/get/642eb41a1c28e72cb8cfad9c
router.route("/get/:id").get(async (req,res) =>{
    let userID = req.params.id;
    const user = await consultant.findById(userID).then((consultant)=>{
       res.status(200).send({status: "user fetched", consultant}) 
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});

    })
})

router.route("/login").post(async(req,res) => {

    try{
        const email = req.body.email;
        
        console.log(email)

         const newconsultant = await consultant.findOne({email:email})
        //  if(newperson){
        //    
        //  }else{

        //  }
         console.log(newconsultant)
         res.status(200).json({data: newconsultant, status:200});
    }catch(err){
        res.status(500).json({message: err.message});
    }
})






module.exports = router;