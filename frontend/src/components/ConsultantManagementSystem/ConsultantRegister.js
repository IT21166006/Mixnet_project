//import react
import React,{useState, useEffect} from "react";
import {Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";

import MixnetLogo from './mixnetlogo.png';
export default function ConsultantRegister(){

  const navigate = useNavigate()

  const [username, setusername] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const [crcon , setcrcon] = useState([]);

  //create consultant profile
  function sendData(e){
    e.preventDefault();
  
  //create object
  const newConsultant = {
      username,
      address,
      age,
      email
  }

  axios.post("http://localhost:8070/consultant/add",newConsultant).then(()=>{
    alert("Consultant Added ✅");
    navigate('/consultprofile')
  })
  .catch((err)=>{
    alert("something went wrong")
  })
  };

  // //delete
  //   function deletedata(i) {
  //       if (window.confirm('Do you want to delete "' + i.itemName + '"')) {
  //         axios
  //           .delete("http://localhost:8070/bidding/delete/" + i._id)
  //           .then(() => {
  //             getBids();
  //           })
  //           .catch((err) => {
  //             alert(err);
  //           });
  //       }
  //     }


//   //update

    //   const handleChange = (e) => {
    //     setbidedit({
    //       ...setbidedit,
    //       [e.target.name]: e.target.value
    //     });
    //   };


    // // Fetch data
    // function getBids() {
    //   axios
    //     .get("http://localhost:8070/bidding/select_own/"+idNo)
    //     .then((res) => {
    //     setbids(res.data);
        
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // }
  
    // useEffect(() => {
    //   getBids();
    // }, []);




  return (
    <div className="container">
      <div className="row">
      <div className="col-md-6 reg-side-bar">
        <a><img src={MixnetLogo} className="mixnetlogo"/></a><br></br>
        <h1 className="logoName">MixNet</h1>
      </div>


      {/* Right side with HTML form */}
      <div className="col-md-6 right-side-con">
        <form className="form-con" onSubmit={sendData}>
          <div className="registerTopic-con">
            <center>Consultant Registration</center>
          </div>
          <div className="subTopic-con">
            <center>Personal Information</center>
          </div>
          <hr className='hrLine-con'></hr>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Username
            </label>
            <input
              className="input-con" id="username" type="text" placeholder="Username" required
              onChange={(e)=>{
                setusername(e.target.value);
              }}
            />
          </div>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Address
            </label>
            <input
              className="input-con" id="username" type="textarea" placeholder="address" required
              onChange={(e)=>{
                setaddress(e.target.value);
              }}
            />
          </div>

          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Age
            </label>
            <input
              className="input-con" id="username" type="number" placeholder="Age" required
              onChange={(e)=>{
                setage(e.target.value);
              }}
            />
          </div>

          
          <div className="form-group-con">
            <label className="label-con" htmlFor="username">
              Email
            </label>
            <input
              className="input-con" id="username" type="text" placeholder="email"
              onChange={(e)=>{
                setemail(e.target.value);
              }}
            />
          </div>
          
          {/*new part              new part             new part*/ }
          <div className="image-upload-container">
      
    </div>

          
          
          <div className="button-group-con">
            <button className="Regbutton-con" >
              Create Profile
            </button>
          </div>

        </form>
      </div>
    </div>
    </div>
  );
};
