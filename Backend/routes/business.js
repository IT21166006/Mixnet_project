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


//----route of update data(Customer)----done
router.route("/update/:id").put(async (req,res) => {
    let BIDID = req.params.id;

        var {setPrice,cusName,cusPhone} = req.body;

        const updateBidPrice = 
        {
           setPrice,
           cusName,
           cusPhone
        }
        const update = await Bidding.findByIdAndUpdate(BIDID, updateBidPrice)
        .then(()=>{
            res.status(200).send({status: "bid Updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error With bid Updated", error: err.massage})
        })
})



//----Route of delete data(Farmer)----done
router.route("/delete/:id").delete(async(req,res)=>{
    let ID = req.params.id;

    await Bidding.findByIdAndDelete(ID)

    .then(()=>{res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "Error With User delete", error: err.massage})
     })
})

//----route of selected bid----done
router.route("/select/:bidID").get(async(req,res)=>{
    let ID = req.params.bidID;

    const bid = await Bidding.findOne({bidID:ID})
    .then((bidding)=>{
        res.json(bidding)
    })
}).patch((err)=>{
    console.log(err)
})



//fetch by idNo
router.route("/select_own/:idNo").get(async(req,res)=>{
    let idno = req.params.idNo;

    const bid = await Bidding.find({idNo:idno})
    .then((bidding)=>{
        res.json(bidding)
    })
}).patch((err)=>{
    console.log(err)
})



//----route of selected bid----done
router.route("/fetch/:id").get(async(req,res)=>{
    let ID = req.params.id;

    const bid = await Bidding.findById(ID)
    .then((bidding)=>{
        res.json(bidding)
    })
}).patch((err)=>{
    console.log(err)
})


//find by farmer ID
router.route("/getFarmer/:phone").get(async(req,res)=>{
    let IDNO = req.params.phone;

    const bid = await Bidding.find(IDNO)
    .then((bidding)=>{
        res.json(bidding)
    })
}).patch((err)=>{
    console.log(err)
})

//search
router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Bidding.find({
        $or: [
          { itemName: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })


module.exports = router;
