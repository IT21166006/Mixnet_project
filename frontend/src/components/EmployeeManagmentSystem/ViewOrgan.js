import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewOrg() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/organ/all")
      .then((response) => {
        setOrganizations(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching organizations:", error);
      });
  }, []);

  return (
    <div>
      {organizations.map((org, index) => (
        <div style={styles.profileCard}>
          <div style={styles.profileImg}></div>
          <div style={styles.profileInfo}>
            <h2>{org.OrganName}</h2>
            <p>Address: {org.oaddress}</p>
            <p>Phone Number: {org.phoneNumber}</p>
            <p>Email: {org.oemail}</p>
            <p>About Us: {org.aboutus}</p>
          </div>
        </div>

      ))}
    </div>
  );

}

const styles = {
  profileCard: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    width: '300px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '30px'
  },
  profileImg: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    margin: '0 auto 20px',
    backgroundColor: '#ccc', // Placeholder color
  },
  profileInfo: {
    marginBottom: '20px',
  },
};

