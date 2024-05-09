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

  // Function to validate email
  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return pattern.test(email);
  };

  // Function to validate username
  const validateUsername = (username) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    return pattern.test(username);
  };

  // Function to handle form submission
  const sendData = (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!validateEmail(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    // Check if username is valid
    if (!validateUsername(username)) {
      alert("Username should contain both letters and numbers.");
      return;
    }

    // Create object
    const newConsultant = {
      username,
      address,
      age,
      email
    }

    axios.post("http://localhost:8070/consultant/add", newConsultant)
      .then(() => {
        alert("Consultant Added ✅");
        navigate('/consultprofile')
      })
      .catch((err) => {
        alert("Something went wrong")
      })
  };

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

            <div className="user-guide-register"><p> *should be contain both letters and numbers</p></div>

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
          
            <div className="button-group-con">
              <button className="Regbutton-con" type="submit">
                Create Profile
              </button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
