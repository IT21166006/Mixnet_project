import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Addorgan() {
  const [OrganName, setOrganName] = useState("");
  const [oaddress, setoaddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [oemail, setoemail] = useState("");
  const [aboutus, setaboutus] = useState("");

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newOragan = {
      OrganName,
      oaddress,
      phoneNumber,
      oemail,
      aboutus,
    };

    axios.post("http://localhost:5000/organ/register", newOragan)
      .then(() => {
        alert("Employee added successfully");
        navigate('/ManageEmployees');
      })
      .catch((err) => {
        alert("Failed to add employee");
      });
  }

  return (
        <div>
            <br></br>
            
        <div className="container">
        <div className="StockTOPIC">
                <h1>Add Organization</h1>
            </div>
            <div className="Stocktitle">
                <div className="additemg">

            <form onSubmit={sendData}>
                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Organ Name:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={5} required 
                        onChange={(e)=>{
                            setOrganName(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Organ Address:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={20} required 
                        onChange={(e)=>{
                            setoaddress(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">phone Number:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={20} required 
                        onChange={(e)=>{
                          setphoneNumber(e.target.value);
                        }}></input>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">email:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={20} required 
                        onChange={(e)=>{
                          setoemail(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">aboutus:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={20} required 
                        onChange={(e)=>{
                          setaboutus(e.target.value);
                        }}></input>
                    </div>
                </div>

                {/* Add other input fields similarly */}

                <Link to={'/ManageEmployees'}><button className="stk-btn-cancel">Cancel</button></Link>
                 <button type="Submit" className="stk-btn-add">Submit</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}
