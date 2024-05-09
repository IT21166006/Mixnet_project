import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllConsultant() {
    const [consultants, setConsultant] = useState([]);
    const apiUrl = 'http://localhost:8070/consultant/display';
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  
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

    const handleDelete = (id) => {
      setConfirmDeleteId(id);
    };

    const handleConfirmDelete = (id) => {
      axios.delete(`http://localhost:8070/consultant/delete/${id}`)
        .then((response) => {
          console.log(response.data);
          // Remove the deleted consultant from the state
          setConsultant(consultants.filter(consultant => consultant._id !== id));
          // Clear the confirmation dialog state
          setConfirmDeleteId(null);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const handleCancelDelete = () => {
      setConfirmDeleteId(null);
    };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant) => (
              <tr className="del-table" key={consultant._id}>
                <td className="del-table">{consultant.username}</td>
                <td className="del-table">{consultant.email}</td>
                <td className="del-table">{consultant.age}</td>
                <td className="del-table">{consultant.address}</td>
                <td>
                  {confirmDeleteId === consultant._id ? (
                    <>
                      <button className="confirm-btn-consultant" onClick={() => handleConfirmDelete(consultant._id)}>Confirm</button>
                      <button className="cancel-btn-consultant" onClick={handleCancelDelete}>Cancel</button>
                    </>
                  ) : (
                    <button className='delete-btn-consultant' onClick={() => handleDelete(consultant._id)}>Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  )
}
