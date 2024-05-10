import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams  } from "react-router-dom";

export default function EditProfile() {
    const {consultantId} = useParams();
 
  const [consultant, setConsultant] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/consultant/get/${consultantId}`);
        setConsultant(response.data.consultant);
        setFormData({
          username: response.data.consultant.username,
          address: response.data.consultant.address,
          age: response.data.consultant.age,
          email: response.data.consultant.email
        });
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };

    fetchConsultant();
  }, [consultantId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8070/consultant/update/${consultantId}`, formData);
      // Redirect or show success message
      window.alert("Consultant profile updated successfully!");
      
    } catch (error) {
      console.error("Error updating consultant:", error);
    }
  };

  return (
    <div>
      <h1>Edit Consultant Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
        

      </form>
    </div>
  );
}
