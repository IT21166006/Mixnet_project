//import react
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileView() {
  const [consultantData, setConsultantData] = useState({});
  const [email, setEmail] = useState(""); // State to store the email of the consultant whose profile to display

  useEffect(() => {
    // Fetch consultant data based on the email
    const fetchConsultantProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/consultant/profile/${email}`);
        setConsultantData(response.data);
      } catch (error) {
        console.error("Error fetching consultant profile:", error);
      }
    };

    // Call the fetch function when the component mounts or when the email state changes
    if (email) {
      fetchConsultantProfile();
    }
  }, [email]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Consultant Profile</h1>
          <div className="form-group">
            <label htmlFor="email">Enter Consultant Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          {consultantData && (
            <div>
              <h2>Consultant Details</h2>
              <p><strong>Username:</strong> {consultantData.username}</p>
              <p><strong>Address:</strong> {consultantData.address}</p>
              <p><strong>Age:</strong> {consultantData.age}</p>
              <p><strong>Email:</strong> {consultantData.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
