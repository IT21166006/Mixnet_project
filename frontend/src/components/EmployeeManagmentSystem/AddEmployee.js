import React, {useState} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function AddEmployee(){

   //Create variable to inputs

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
   const [sdate, setSdate] = useState("");



const navigate = useNavigate();

//send data to backend
 
function sendData(e){
    e.preventDefault();

    const newsemplyee = {
        firstname,
        LastName,
        SureName,
        aboutme,
        number,
        email,
        Education,
        Cetification,
        Skills,
        companyName,
        sdate

    }
    //pass data to backend
  axios.post("http://localhost:8070/stock/add",newsemplyee).then(()=>{
    alert("emplyee add succesful");
    navigate('/ManageItems')
  }).catch((err)=>{
    alert("unsuccesfull")
  })

}

    return(
        <div>
            <br></br>
            
        <div className="container">
        <div className="StockTOPIC">
                <h1>ADD Employee</h1>
            </div>
            <div className="Stocktitle">
                <div className="additemg">

            <form onSubmit={sendData}>
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
                 <button type="Submit" className="stk-btn-add">submit</button>
            </form>
            </div>
            </div>
        </div>
        </div>
    )
}
