//import react
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MixNet from "./MixNet.png";

//import axios
import axios from "axios";

//export function create profile
export default function PostAdvertisement() {

    //const navigate = useNavigate()
    //create variebles to inputs
    const [title, settitle] = useState("");
    const [image, setimage] = useState(null);
    const [discription, setdiscription] = useState("");
    const [price, setprice] = useState("");
    const [contact, setcontact] = useState("");
    const [auther, setauther] = useState("");

    const [createProf, setcreateProf] = useState([]);

    //Create BUsiness Profile
    const passData = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);
        formData.append("discription", discription);
        formData.append("price", price);
        formData.append("contact", contact);
        formData.append("auther", auther); // Append the image file to the formData

        //pass data to backend
        axios
            .post("http://localhost:8070/advertisement/postadd", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set content type for formData
                },
            })
            .then(() => {
                alert("profile create successfully");
                settitle("");
                setimage(null);
                setdiscription("");
                setprice("");
                setcontact("");
                setauther(""); // Clear the image file after successful submission
                //getPosts(); // Fetch posts again after adding a new one
            })
            .catch((err) => {
                alert("Something went wrong");
                console.error(err);
            });
    };

    return (
        <div className="container business-con">
            <div className="row">
                <div className="col-md-3 business-side-bar business-img-align business-col-bg">
                    <h1 className="business-img-align">MixNet</h1>
                </div>
                <div className="col-md-7">
                <form onSubmit={passData}>
                <div className="row">
                    <input type="file" placeholder="image" accept="image/*" id="image"
                     onChange={(e) => {
                        setimage(e.target.files[0]);
                    }}></input>
                </div>
                <div className="row">
                <input type="text" placeholder="Title"
                     onChange={(e) => {
                        settitle(e.target.value);
                    }}></input>
                </div>
                <div className="row">
                <input type="text" placeholder="Price"
                     onChange={(e) => {
                        setprice(e.target.value);
                    }}></input>
                </div>
                <div className="row">
                <input type="text" placeholder="Discription"
                     onChange={(e) => {
                        setdiscription(e.target.value);
                    }}></input>
                </div>
                <div className="row">
                <input type="text" placeholder="Contact"
                     onChange={(e) => {
                        setcontact(e.target.value);
                    }}></input>
                </div>
                <div className="row">
                <input type="text" placeholder="auther"
                     onChange={(e) => {
                        setauther(e.target.value);
                    }}></input>
                </div>
                <div className="row">
                    <div className="col-md-6"><button type="submit">POST</button></div>
                </div>
                </form>
                </div>
                
            </div>
        </div>
    )
}
