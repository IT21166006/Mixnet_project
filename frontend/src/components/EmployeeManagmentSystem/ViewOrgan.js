import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewOrg() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/organizations")
      .then((response) => {
        setOrganizations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organizations:", error);
      });
  }, []);

  return (
    <div>
      <br />
      <div className="container">
        <div className="StockTOPIC">
          <h1>View Organizations</h1>
        </div>
        <div className="Stocktitle">
          <div className="additemg">
            <table className="table">
              <thead>
                <tr>
                  <th>Organization Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>About</th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((org, index) => (
                  <tr key={index}>
                    <td>{org.organName}</td>
                    <td>{org.oaddress}</td>
                    <td>{org.phoneNumber}</td>
                    <td>{org.oemail}</td>
                    <td>{org.aboutUs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/addOrganization"><button className="stk-btn-add">Add Organization</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
