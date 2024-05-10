//import react
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MixNet from "./MixNet.png";

//import axios
import axios from "axios";

//export function create profile
export default function CreateBusiProf() {

    const { id } = useParams();
    const { idNo } = useParams();

    //const navigate = useNavigate()
    //create variebles to inputs
    const [bname, setbname] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [type, settype] = useState("");
    const [discription, setdiscription] = useState("");
    const [image, setimage] = useState("");


    const [createProf, setcreateProf] = useState([]);

    //Create BUsiness Profile
    function sendData(e) {
        e.preventDefault();



        //create javascript obj
        const newBusiness = {
            bname,
            address,
            email,
            type,
            discription,
            image
        }

        //pass data to backend
        axios.post("http://localhost:8070/business/create", newBusiness).then(() => {
            alert("Profile Create Succsesful")
        })
            .catch((err) => {
                alert("Somthing went wrong")
            });
    };

    return (
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
                                onChange={(e) => {
                                    setbname(e.target.value);
                                }}
                            ></input><br></br>

                            <input className="business-prof-input" type="email" placeholder="Email (Current Personal Account)"
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                            ></input><br></br>

                            <input className="business-prof-input" type="text" placeholder="Address"
                                onChange={(e) => {
                                    setaddress(e.target.value);
                                }}
                            ></input><br></br>

                            <input className="business-prof-input" type="text" placeholder="Business Type"
                                onChange={(e) => {
                                    settype(e.target.value);
                                }}></input><br></br>

                            <input className="business-prof-input" type="text" placeholder="Discripton"
                                onChange={(e) => {
                                    setdiscription(e.target.value);
                                }}></input><br></br>

                            <input className="business-prof-input" type="file" placeholder="Discripton"
                                onChange={(e) => {
                                    setimage(e.target.value);
                                }}></input><br></br>

                            <button className="business-prof-button">CREATE ACCOUNT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
