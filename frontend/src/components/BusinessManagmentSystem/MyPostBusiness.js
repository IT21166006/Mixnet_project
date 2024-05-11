//import react
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MixNet from "./MixNet.png";

//import axios
import axios from "axios";

//export function create profile
export default function MyPostBusiness() {

    const [advertisement, setadvetisement] = useState([]);


    // Fetch data
    function getadvetisement() {
        axios
            .get("http://localhost:8070/advertisement/allpost")
            .then((res) => {
                setadvetisement(res.data);

            })
            .catch((err) => {
                alert(err.message);
            });
    }

    useEffect(() => {
        getadvetisement();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">a</div>
                <div className="col-md-7">
                    {advertisement.map((i, index) => (
                        <div key={index}>
                            <div>title = {i.title}</div>
                            <div>
                            <img src={`http://localhost:8070/Storage/AdvertisementUploads/${i.image}`}
                                alt={i.image}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            </div>
                            <div>Price = {i.price}LKR</div>
                            <div>Discription = {i.discription}</div>
                            <div>Contact = {i.contact}</div>
                            <div>Author = {i.author}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

