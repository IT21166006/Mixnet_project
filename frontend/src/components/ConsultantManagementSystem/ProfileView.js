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
    <div className="profileView-container ">
      <div className="row">
        <div className="col-md-12">
          <h1 className="topic-profile">Consultant Profile</h1>
          <div className="form-group-profile">
            <label className="label-profile" htmlFor="email">Enter Consultant Email:</label>
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
            <div className="profile-frame">
              <h2>Consultant Details</h2>
              <div className="consult-details">
              <p className="conuslt-details"><strong>Username:</strong> {consultantData.username}</p>
              <p className="conuslt-details"><strong>Address:</strong> {consultantData.address}</p>
              <p className="conuslt-details"><strong>Age:</strong> {consultantData.age}</p>
              <p className="conuslt-details"><strong>Email:</strong> {consultantData.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
