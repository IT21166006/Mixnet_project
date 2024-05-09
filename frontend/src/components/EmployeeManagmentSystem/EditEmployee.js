
import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditEmplyee() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [emplyeeedit, setEmplyee] = useState({


        firstname: '',
        LastName: '',
        SureName: '',
        aboutme: '',
        number: '',
        email: '',
        Education: '',
        Cetification: '',
        Skills: '',
        companyName: '',
        sdate: ''

    });

    //Fetch data
    useEffect(() => {
        function getEmployee() {
            axios.get("http://localhost:8070/stock/get/" + id)
                .then((res) => {
                    setEmplyee(res.data.data);
                    console.log(res.data.data);
                }).catch((err) => {
                    alert(err.message);
                })
        }
        getEmployee();
    }, [])

    const handleChange = (e) => {
        setstocks({
            ...emplyeeedit,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(stock); // or save the data to your backend
        axios
            .put('http://localhost:8070/emplyee/update/' + id, emplyeeedit)
            .then((response) => {
                // console.log(response.data);
                alert("emplyee Updated");
                navigate('/ManageItems');
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div><br></br>
            <div className="container">
                <div className="StockTOPIC">
                    <h1>EDIT EMPOLYEE</h1>
                </div>
                <div className="Stocktitle">
                    <div className="additemg">
                        <form onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col-md-4">
                                    <label for>first name :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="famer" value={stockedit.famer}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Last Name:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="ItemName" value={stockedit.ItemName}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for> SureName:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="quantity" value={stockedit.quantity}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>about me:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>email :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Education :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Cetification :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Skills :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>companyName :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                             <div className="row">
                                <div className="col-md-4">
                                    <label for>companyName :</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required name="price" value={stockedit.price}
                                        onChange={handleChange}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label for>Date:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="Date" className="stk-input-insert" required name="sdate" value={stockedit.sdate}
                                        onChange={handleChange}>
                                    </input>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Save</button>
                            <Link to={'/StockManageItems'}><button className="btn btn-danger">Cancel</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}