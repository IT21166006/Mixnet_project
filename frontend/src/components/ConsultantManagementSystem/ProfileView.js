// Import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";

// Functional component ProfileView
const ProfileView = () => {
  // State variables to store consultant data
  const [consultant, setConsultant] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch consultant data from backend upon component mounting
  useEffect(() => {
    // Fetch consultant data from backend
    axios.get("http://localhost:8070/consultant/display")
      .then((response) => {
        // Set consultant data to state
        setConsultant(response.data);
        // Set loading to false to indicate data loading complete
        setLoading(false);
      })
      .catch((error) => {
        // Log any errors
        console.error("Error fetching consultant data: ", error);
        // Set loading to false to indicate data loading complete, even if it failed
        setLoading(false);
      });
  }, []);

  // Render loading indicator if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render consultant profile data
  return (
    <div>
      <h1>Consultant Profile</h1>
      <ul>
        <li>Username: {consultant.username}</li>
        <li>Address: {consultant.address}</li>
        <li>Age: {consultant.age}</li>
        <li>Email: {consultant.email}</li>
      </ul>
    </div>
  );
};

// Export ProfileView component
export default ProfileView;
