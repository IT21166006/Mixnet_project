
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditEmployee() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [employeeEdit, setEmployeeEdit] = useState({
        firstname: '',
        lastName: '',
        sureName: '',
        aboutme: '',
        number: '',
        email: '',
        education: '',
        certification: '',
        skills: '',
        companyName: '',
        sdate: ''
    });

    // Fetch data
    useEffect(() => {
        function getEmployee() {
            axios.get("http://localhost:5000/emp/get/" + id)
                .then((res) => {
                    setEmployeeEdit(res.data.data);
                    console.log(res.data.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getEmployee();
    }, []);

    const handleChange = (e) => {
        setEmployeeEdit({
            ...employeeEdit,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put('http://localhost:5000/emp/update/' + id, employeeEdit)
            .then((response) => {
                alert("Employee Updated");
                navigate('/ManageItems');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <br />
            <div className="container">
                <div className="StockTOPIC">
                    <h1>EDIT EMPLOYEE</h1>
                </div>
                <div className="Stocktitle">
                    <div className="additemg">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="firstName">First Name:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="firstname" value={employeeEdit.firstname} onChange={handleChange} />
                                </div>
                            </div>


                            <div className="row">                                 <div className="col-md-4">
                                    <label for>Last Name:</label>                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="lastName" value={employeeEdit.lastName}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for> SureName:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="sureName" value={employeeEdit.sureName}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>about me:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="aboutme" value={employeeEdit.aboutme}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>email :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="number" value={employeeEdit.number}
                                        onChange={handleChange}></input>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Education :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="email" value={employeeEdit.email}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Cetification :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="education" value={employeeEdit.education}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Skills :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="certification" value={employeeEdit.certification}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>companyName :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="skills" value={employeeEdit.skills}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                             <div className="row">
                                <div className="col-md-4">
                                    <label for>companyName :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="companyName" value={employeeEdit.companyName}
                                        onChange={handleChange}></input>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="sdate">Date:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="Date" className="stk-input-insert" required name="sdate" value={employeeEdit.sdate} onChange={handleChange} />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Save</button>
                            <Link to={'/ManageItems'}><button className="btn btn-danger">Cancel</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
