import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddOrg() {
  const [organName, setOrganName] = useState("");
  const [oaddress, setOaddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oemail, setOemail] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newOrgan = {
      organName,
      oaddress,
      phoneNumber,
      oemail,
      aboutUs
    };

    axios.post("http://localhost:8070/organization/add", newOrgan)
      .then(() => {
        alert("Organization added successfully");
        navigate('/ManageOrganizations');
      })
      .catch((err) => {
        alert("Failed to add organization");
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
                  <label className="stk-lable-insert">Organization Name:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" className="stk-input-insert" required
                    onChange={(e) => {
                      setOrganName(e.target.value);
                    }}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label className="stk-lable-insert">Organization Address:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" className="stk-input-insert" required
                    onChange={(e) => {
                      setOaddress(e.target.value);
                    }}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label className="stk-lable-insert">Phone Number:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" className="stk-input-insert" required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label className="stk-lable-insert">Email:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" className="stk-input-insert" required
                    onChange={(e) => {
                      setOemail(e.target.value);
                    }}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label className="stk-lable-insert">About Organization:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" className="stk-input-insert" required
                    onChange={(e) => {
                      setAboutUs(e.target.value);
                    }}></input>
                </div>
              </div>

              <Link to={'/ManageOrganizations'}><button className="stk-btn-cancel">Cancel</button></Link>
              <button type="Submit" className="stk-btn-add">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
