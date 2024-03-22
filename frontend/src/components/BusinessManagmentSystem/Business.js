//import react
import React,{useState,useEffect} from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
//import axios
import axios from "axios"; 

//export function create bid
export default function BidStore(){
    
    const {id} = useParams();

    const navigate = useNavigate()

    const [bids , setbids] = useState([]);
  
    
    // Fetch data
    function getBids() {
      axios
        .get("http://localhost:8070/bidding/store")
        .then((res) => {
          setbids(res.data);
        
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  
    useEffect(() => {
      getBids();
    }, []);




    //delete
    function deletedata(i) {
        if (window.confirm('Do you want to delete "' + i.itemName + '"')) {
          axios
            .delete("http://localhost:8070/bidding/delete/" + i._id)
            .then(() => {
              getBids();
            })
            .catch((err) => {
              alert(err);
            });
        }
      }

      let total = 0;

    
      return(
        <div className="container business-con">
            <div className="row">
                <div className="col-md-6 business-side-bar business-img-align business-col-bg">
                    <a><img className="business-img-size" src={MixNet}></img></a><br></br>
                    <h1 className="business-img-align">MixNet</h1>
                </div>
                <div className="col-md-6 business-col-bg-content">
                    <br></br><br></br> <br></br>
                    <h4>CREATE BUSINESS PROFILE</h4>
                    <h5>It's quick and essy</h5>
                    <hr className="hr"></hr>
                    <div className="business-form-box">
                        <form onSubmit={sendData}>

                            <input className="business-prof-input" type="text" placeholder="Business Name"
                            onChange={(e)=>{
                                setbname(e.target.value);
                            }}
                            ></input><br></br>

                            <input className="business-prof-input" type="email" placeholder="Email (Current Personal Account)"
                            onChange={(e)=>{
                                setemail(e.target.value);
                            }}
                            ></input><br></br>

                            <input className="business-prof-input" type="text" placeholder="Address"
                            onChange={(e)=>{
                                setaddress(e.target.value);
                            }}
                            ></input><br></br>

                            <input className="business-prof-input" type="text" placeholder="Business Type"
                            onChange={(e)=>{
                                settype(e.target.value);
                            }}></input><br></br>

                            <input className="business-prof-input" type="text" placeholder="Discripton"
                            onChange={(e)=>{
                                setdiscription(e.target.value);
                            }}></input><br></br>

                            <button className="business-prof-button">CREATE ACCOUNT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
