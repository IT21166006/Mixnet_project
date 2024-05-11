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
    <div className="container">
      <div className="">
        <section id="content">
          <main>
            <div className="">
              <div className="left">
                <br />
                <div className="StockTOPIC">
                  <h1>Manage employee</h1>
                </div>
                <ul className="breadcrumb"></ul>
              </div>
              <Link to={"/AddEmployee"} className="btn btn-success stk-button">
                <i className="bx bxs-add-to-queue"></i>
                <span className="text">Add Employee</span>
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
                      <th className="stk-tableh">firstname</th>
                      <th className="stk-tableh">Last Name</th>
                      <th className="stk-tableh">Sure Name</th>
                      <th className="stk-tableh">about me</th>
                      <th className="stk-tableh">number</th>
                      <th className="stk-tableh">email</th>
                      <th className="stk-tableh">Education</th>
                      <th className="stk-tableh">Certification</th>
                      <th className="stk-tableh">Skills</th>
                      <th className="stk-tableh">companyName</th>
                      <th className="stk-tableh">sdate</th>
                      <th className="stk-tableh">image</th>
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
                        <td className="stk-tableb">{i.sdate}</td>
                        <td className="stk-tableb">
                          <img
                            src={`http://localhost:8070/uploads/${i.image}`}
                            alt={i.firstname}
                            style={{ width: '80px', height: '80px' }}
                          />
                        </td>
                        <td className="stk-tableb">
                          <Link to={`/EditEmployee/${i._id}`}>
                            <button type="button" className="btn btn-success">Update</button>
                          </Link>
                        </td>
                        <td className="stk-tableb">
                          <button type="button" className="btn btn-danger" onClick={() => deleteData(i)}>Remove</button>
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
