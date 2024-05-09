import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageItems() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch data
  function getUsers() {
    axios
      .get("http://localhost:8070/stock/")
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
  function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:8070/stock/delete/" + i._id)
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
        .get(`http://localhost:8070/stock/search/${searchInput}`)
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
  let total = 0;

  return (
    <div className="container">
      <div className="">
      <body>
                <section id="content">
                    <main>
                        <div className="">
                            <div className="left">
                              <br></br>
                              <div className="StockTOPIC">
                                <h1>Manage Items</h1>
                                </div>
                                <ul className="breadcrumb">
                                    
                                </ul>
                            </div>
                            <Link to={"/AddStock"} className="btn btn-success stk-button">
                            <i class='bx bxs-add-to-queue' ></i>
                                <span className="text">Add Employee</span>
                            </Link>
                            <Link to={"/Stockreport"} className="btn btn-warning">
                              <i class='bx bxs-report'></i>
                                <span className="text">Reportgenarate</span>
                            </Link>
                            </div>

                            <div className="">
                                <div className="order">
                                    <div className="head">
                                        <h3>Manage Employee</h3>
                                        <div class="col-auto">
                                            <div class="input-group mb-2">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="inlineFormInputGroup"
                                                    placeholder="Search"
                                                    value={searchInput}
                                                    onChange={(e) => setSearchInput(e.target.value)}/>
                                                <div class="input-group-prepend" onClick={getUsers}>
                                                    <div class="input-group-text">
                                                        <i class="bx bx-x"></i>
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
                                            <th className="stk-tableh">about me </th>
                                            <th className="stk-tableh"> number </th>
                                            <th className="stk-tableh">email </th>
                                            <th className="stk-tableh">Education</th>
                                            <th className="stk-tableh">Certification</th>
                                            <th className="stk-tableh">Skills</th>
                                            <th className="stk-tableh">companyName</th>
                                            <th className="stk-tableh">sdate</th>
                                            <th className="stk-tableh"></th>
                                            <th className="stk-tableh"></th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {users.map((i, index)=>{
                                               total = i.quantity*i.price;
                                                return(
                                                    <tr>
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
                                                        <td className="stk-tableb"><Link to={`/EditStock/${i._id}`}><button type="button" className=" btn btn-success" >Update</button></Link></td>
                                                        <td className="stk-tableb"><button type="button" className="btn btn-danger" onClick={(()=>deletedata(i))}>Remove</button></td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                       
                    </main>
                </section>
            </body>
      </div>
    </div>
    )
}
  export default ManageItems