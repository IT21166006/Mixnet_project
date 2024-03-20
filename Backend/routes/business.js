const router = require("express").Router();
let Business = require("../models/business");


//----route of data insert(Bussiness)----done
router.route("/create").post((req,res)=>
{
    const business_name  = req.body.b_name;
    const email = Number(req.body.email);
    const address =  Number(req.body.address);
    const type = req.body.type;
    const discription =(req.body.discription);
    

    const newBusiness = new Business( 
        {
            business_name,
            email,
            address,
            type,
            discription
        }
    )

    newBusiness.save().then(()=>
    {
            res.json("Bid Added")
        })
    .catch((err)=>{
        console.log(err);  
    })
})


//----route of read data(for Bidding Store)----done
router.route("/fetch.own.details").get((req,res)=>{
    Bidding.find().then((bidding)=>{
        res.json(bidding)
    })
}).patch((err)=>{
    console.log(err)
})

module.exports = router;
