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
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant) => (
              <tr key={consultant._id}>
                <td>{consultant.username}</td>
                <td>{consultant.email}</td>
                <td>{consultant.age}</td>
                <td>{consultant.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
