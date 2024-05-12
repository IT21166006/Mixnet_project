import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewOrg() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/organ/all")
      .then((response) => {
        setOrganizations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organizations:", error);
      });
  }, []);

  // Delete data
  function deleteData(org) {
    if (window.confirm('Do you want to delete "' + org.name + '" ?')) {
      axios
        .delete("http://localhost:8080/organ/remove/" + org._id)
        .then(() => {
          setOrganizations(prevOrganizations => prevOrganizations.filter(item => item._id !== org._id));
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div className="background1">
      {organizations.map((org) => (
        <div key={org._id} style={styles.profileCard}>
          <div style={styles.profileInfo}>
            <img
              src={`http://localhost:8080/storages/${org.image}`}
              alt={org.firstname}
              style={{ width: '200px', height: '200px', borderRadius: '50%' }}
            />
            <h2>{org.OrganName}</h2>
            <div style={styles.contactInfo}>
              <h2>Contact Info </h2>
              <p><strong>Address:</strong> {org.oaddress}</p>
              <p><strong>Phone Number:</strong> {org.phoneNumber}</p>
              <p><strong>Email:</strong> {org.oemail}</p>
            </div>
            <div style={styles.aboutUs}>
              <h3>About Us</h3>
              <p>{org.aboutus}</p>
              <button type="button" className="stk-btn-cancel" onClick={() => deleteData(org)}>Remove</button>
              <Link to={'/ManageEmployee'}><button className="stk-btn-cancel">Cancel</button></Link>

            </div>
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
    width: '800px',
    margin: '30px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    


  },
  profileImgWrapper: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '150px',
    height: '150px',
    margin: '0 auto 20px',
    backgroundColor: '#ccc',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileInfo: {
    marginBottom: '20px',
  },
  contactInfo: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  aboutUs: {
    textAlign: 'left',
  },
};
