import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CreateOffer() {
    const [OrganName, setOrganName] = useState("");
    const [aboutus, setAboutUs] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [oemail, setEmail] = useState("");
    const [oaddress, setAddress] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const passData = (e) => {
        e.preventDefault();
        console.log('Form');
        const formData = new FormData();
        formData.append("OrganName", OrganName);
        formData.append("aboutus", aboutus);
        formData.append("phoneNumber", phoneNumber);
        formData.append("oemail", oemail);
        formData.append("oaddress", oaddress);
        formData.append("image", image);

        axios
            .post("http://localhost:8080/organ/register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                alert("Item added successfully");
                setOrganName("");
                setAboutUs("");
                setPhoneNumber("");
                setEmail("");
                setAddress("");
                setImage(null);
                navigate('/ViewOrgan');
            })
            .catch((err) => {
                alert("Something went wrong");
                console.error(err);
            });
    };

    return (
        <div className="background">
            <br></br>
            <div className="container">
                <div className="StockTOPIC">
                    <h1>Add Organization</h1>
                </div>
                <div className="Stocktitle">
                    <div className="additemg">
                        <form onSubmit={passData}>

                            <div className="row">
                                <div className="col-md-4">
                               
                                    <label className="stk-lable-insert"  >Organization Name:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" maxLength={100} required
                                        onChange={(e) => {
                                            setOrganName(e.target.value);
                                        }}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label className="stk-lable-insert">About Us:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" maxLength={500} required
                                        onChange={(e) => {
                                            setAboutUs(e.target.value);
                                        }}></input>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputImage">Organization Image:</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="InputImage"
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label className="stk-lable-insert">Phone Number:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" maxLength={20} required
                                        onChange={(e) => {
                                            setPhoneNumber(e.target.value);
                                        }}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label className="stk-lable-insert">Email:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="email" className="stk-input-insert" required
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <label className="stk-lable-insert">Address:</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="stk-input-insert" required
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <Link to={'/ViewOrgan'}>
                                        <button className="stk-btn-cancel">Cancel</button>
                                    </Link>
                                    <button type="submit" className="stk-btn-add">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
