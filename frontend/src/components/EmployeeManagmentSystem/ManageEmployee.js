import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageEmployee() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch data
  function getUsers() {
    axios
      .get("http://localhost:8080/emp/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getUsers();
  }, []);

  // Delete data
  function deleteData(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:8080/emp/delete/" + i._id)
        .then(() => {
          getUsers();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchUser() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8080/emp/search/${searchInput}`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getUsers();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchUser();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return (
    
    <div className="tablecontainer">
      <div className="">
        <section id="content">
          <main>
            <div className="">
              <div className="left">
                <br />
                <div className="StockTOPIC">
                  <h1>Manage Employee</h1>
                </div>
                <ul className="breadcrumb"></ul>
              </div>
              <Link to={"/"} className="btn btn-success stk-button">
                <i className="bx bxs-add-to-queue"></i>
                <span className="text">Add Employee</span>
              </Link>
              <Link to={"/AddOrg"} className="btn btn-success stk-button">
                <i className="bx bxs-add-to-queue"></i>
                <span className="text">Organizations</span>
              </Link>
            </div>
            

            <div className="">
              <div className="order">
                <div className="head">
                  <h3>Manage Employee</h3>
                  <div className="col-auto">
                    <div className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                      <div className="input-group-prepend" onClick={getUsers}>
                        <div className="input-group-text">
                          <i className="bx bx-x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <table className="">
                  <thead>
                    <tr>
                      <th className="stk-tableh">First Name</th>
                      <th className="stk-tableh">Last Name</th>
                      <th className="stk-tableh">Sure Name</th>
                      <th className="stk-tableh">About Me</th>
                      <th className="stk-tableh">Number</th>
                      <th className="stk-tableh">Email</th>
                      <th className="stk-tableh">Education</th>
                      <th className="stk-tableh">Certification</th>
                      <th className="stk-tableh">Skills</th>
                      <th className="stk-tableh">Company Name</th>
                      <th className="stk-tableh">Date</th>
                      <th className="stk-tableh">Image</th>
                      <th className="stk-tableh" ></th>
                      

                      <th className="stk-tableh">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((i, index) => (
                      <tr key={index}>
                        <td className="stk-tableb">{i.firstname}</td>
                        <td className="stk-tableb">{i.LastName}</td>
                        <td className="stk-tableb">{i.SureName}</td>
                        <td className="stk-tableb">{i.aboutme}</td>
                        <td className="stk-tableb">{i.number}</td>
                        <td className="stk-tableb">{i.email}</td>
                        <td className="stk-tableb">{i.Education}</td>
                        <td className="stk-tableb">{i.Certification}</td>
                        <td className="stk-tableb">{i.Skills}</td>
                        <td className="stk-tableb">{i.companyName}</td>
                        <td className="stk-tableb">{new Date(i.sdate).toLocaleDateString('en-US')}</td>
                        
                        <td className="stk-tableb">
                          <img
                            src={`http://localhost:8080/uploads/${i.image}`}
                            alt={i.firstname}
                            style={{ width: '50px', height: '50px' }}
                          />
                        </td>
                        
                        <td className="stk-tableb">
                          <Link to={`/EditEmployee/${i._id}`}>
                            <button type="button" className="stk-btn-add">Update</button>
                          </Link>
                        </td>
                        <td className="stk-tableb">
                          <button type="button" className="stk-btn-cancel" onClick={() => deleteData(i)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default ManageEmployee;
