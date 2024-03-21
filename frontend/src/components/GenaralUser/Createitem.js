import React, { useState } from "react";
import axios from "axios";
import  "../../Styles/genaralusercss.css";

export default function CreateOffer() {
  const [itemid, setitemid] = useState("");
  const [itemname, setitemname] = useState("");
  const [itemdescription, setitemdescription] = useState("");
  const [itemownerdetails, setitemownerdetails] = useState("");
  const [itemprice, setitemprice] = useState("");

  const passData = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newItem = {
      itemid,
      itemname,
      itemdescription,
      itemownerdetails,
      itemprice
    };

    axios.post("http://localhost:8070/items/add", newItem)
      .then(() => {     
        alert("Item added successfully");
        // You might want to clear the form fields after successful submission
        setitemid("");
        setitemname("");
        setitemdescription("");
        setitemownerdetails("");
        setitemprice("");
      })
      .catch((err) => {
        alert("Something went wrong");
        console.error(err); // Log the error for debugging
      });
  };

  return (
    <div className="container">
      <div className="logform">
        <form onSubmit={passData}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="InputId">Item ID:</label>
              <input type="number" className="form-control" id="InputId" placeholder="Item ID" required value={itemid} onChange={(e) => setitemid(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="InputUserOffername">Item Name</label>
              <input type="text" className="form-control" id="InputUserOffername" placeholder="Item Name" required value={itemname} onChange={(e) => setitemname(e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="Inputofferpersontage">Item Description:</label>
              <input type="text" className="form-control" id="Inputofferpersontage" placeholder="Item Description" required value={itemdescription} onChange={(e) => setitemdescription(e.target.value)} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="Inputstartdate">Item Owner Details:</label>
              <input type="text" className="form-control" id="Inputstartdate" placeholder="Item Owner Details" value={itemownerdetails} onChange={(e) => setitemownerdetails(e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="Inputenddate">Item Price:</label>
              <input type="text" className="form-control" id="Inputenddate" placeholder="Item Price" required value={itemprice} onChange={(e) => setitemprice(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-primary">Create Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
