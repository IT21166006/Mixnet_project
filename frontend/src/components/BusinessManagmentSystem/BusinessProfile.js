//import react
import React,{useState,useEffect} from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
//import axios
import axios from "axios"; 

//export function create bid
export default function BusinessProfile(){
  
    
    // // Fetch data
    // function getProfile() {
    //   axios
    //     .get("http://localhost:8070/bussiness/profile")
    //     .then((res) => {
    //       setbids(res.data);
        
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // }
  
    // useEffect(() => {
    //   getBids();
    // }, []);




    // //delete
    // function deletedata(i) {
    //     if (window.confirm('Do you want to delete "' + i.itemName + '"')) {
    //       axios
    //         .delete("http://localhost:8070/bidding/delete/" + i._id)
    //         .then(() => {
    //           getBids();
    //         })
    //         .catch((err) => {
    //           alert(err);
    //         });
    //     }
    //   }

    //   let total = 0;

    
      return(
        <div className="container business-con">
            <div className="row">
                <div className="col-md-6 business-side-bar business-img-align business-col-bg">
                </div>
                <div className="col-md-6 business-col-bg-content">
                    <br></br><br></br> <br></br>
                    <h4>CREATE BUSINESS PROFILE</h4>
                    <h5>It's quick and essy</h5>
                    <hr className="hr"></hr>
                    <div className="business-form-box">
                         
                    </div>
                </div>
            </div>
        </div>
    )
}
