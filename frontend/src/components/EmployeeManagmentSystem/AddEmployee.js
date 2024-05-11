
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CreateOffer() {
    const [firstname, setFirstname] = useState("");
    const [LastName, setLastName] = useState("");
    const [SureName, setSureName] = useState("");
    const [aboutme, setAboutme] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [Education, setEducation] = useState("");
    const [Certification, setCertification] = useState("");
    const [Skills, setSkills] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [sdate, setsdate] = useState("");
    const [itemimage, setItemimage] = useState(null);

    const navigate = useNavigate();

    const passData = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("LastName", LastName);
        formData.append("SureName", SureName);
        formData.append("aboutme", aboutme);
        formData.append("number", number);
        formData.append("email", email);
        formData.append("Education", Education);
        formData.append("Certification", Certification);
        formData.append("Skills", Skills);
        formData.append("companyName", companyName);
        formData.append("sdate", sdate);
        formData.append("image", itemimage);

        axios
            .post("http://localhost:8080/emp/createemp", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                alert("Item added successfully");
                setFirstname("");
                setLastName("");
                setSureName("");
                setAboutme("");
                setNumber("");
                setEmail("");
                setEducation("");
                setCertification("");
                setSkills("");
                setCompanyName("");
                setsdate("");
                setItemimage(null);
                navigate('/ManageEmployees');
            })
            .catch((err) => {
                alert("Something went wrong");
                console.error(err);
            });
    };

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="StockTOPIC">
                    <h1>ADD Employee</h1>
                </div>
                <div className="Stocktitle">
                    <div className="additemg">
                        <form onSubmit={passData}>

                        <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Id :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={5} required 
                        onChange={(e)=>{
                            setFirstname(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Last Name :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="stk-input-insert" maxLength={20} required 
                        onChange={(e)=>{
                            setLastName(e.target.value);
                        }}></input>
                    </div>
                </div>


                <div className="form-group">
            <label htmlFor="InputImage">Item Image:</label>
            <input
              type="file"
              className="form-control-file"
              id="InputImage"
              accept="image/*"
              onChange={(e) => setItemimage(e.target.files[0])}
            />
          </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Sure Name :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required maxLength={20}
                        onChange={(e)=>{
                            setSureName(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">About me:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required 
                        onChange={(e)=>{
                            setAboutme(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Enter mobile number :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required
                        onChange={(e)=>{
                            setNumber(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Enter Email :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Education :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required
                        onChange={(e)=>{
                            setEducation(e.target.value);
                        }}></input>
                    </div>
                </div> 


                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Enter Certification :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required
                        onChange={(e)=>{
                            setCertification(e.target.value);
                        }}></input>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Enter Skills :</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required
                        onChange={(e)=>{
                            setSkills(e.target.value);
                        }}></input>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Enter Company Name:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text"className="stk-input-insert" required
                        onChange={(e)=>{
                            setCompanyName(e.target.value);
                        }}></input>
                    </div>
                </div>


               

                <div className="row">
                    <div className="col-md-4">
                        <label className="stk-lable-insert">Date :</label>
                    </div>
                    <div className="col-sm-2 col-form-label">
                        <input type="date" className="stk-input-insert"required
                        onChange={(e)=>{
                            setsdate(e.target.value);
                        }}></input>
                    </div>
                    
                </div>





                            



                            
                            <Link to={'/ManageEmployees'}><button className="stk-btn-cancel">Cancel</button></Link>
                            <button type="submit" className="stk-btn-add">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



