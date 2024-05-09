import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllConsultant() {
    const [consultants, setConsultant] = useState([]);
    const apiUrl = 'http://localhost:8070/consultant/display';
  
    useEffect(() => {
      axios.get(apiUrl)
        .then((response) => {
          setConsultant(response.data);
          console.log(consultants)
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

  return (
    <div>
        <div className="container">
        <table className="table Del-table">
          <thead className="thead-dark">
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant) => (
              <tr className="del-table" key={consultant._id}>
                <td className="del-table">{consultant.username}</td>
                <td className="del-table">{consultant.email}</td>
                <td className="del-table">{consultant.age}</td>
                <td className="del-table">{consultant.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}
