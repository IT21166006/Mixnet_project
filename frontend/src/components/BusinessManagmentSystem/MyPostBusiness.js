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

    function deletedata(i) {
        if (window.confirm('Do you want to delete "' + i.title + '"')) {
          axios
            .delete("http://localhost:8070/advertisement/delete/" + i._id)
            .then(() => {
              getadvetisement();
            })
            .catch((err) => {
              alert(err);
            });
        }
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">a</div>
                <div className="col-md-7 ">
                    {advertisement.map((add, index) => (
                        <div key={index}>
                            <section>
                                <form>
                                <div className="row business-post-card">
                                    <div className="row ">{add.title}</div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div>
                                                <img src={`http://localhost:8070/Storage/AdvetisementUploads/${add.image}`}
                                                    alt={add.image}
                                                    style={{ width: '400px', height: '300px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>Price = {add.price}LKR</div>
                                            <div>Discription = {add.discription}</div>
                                            <div>Contact = {add.contact}</div>
                                            <div>Author = {add.auther}</div>
                                        </div>
                                        <Link>DELETE</Link>
                                    </div>
                                </div>
                                </form>
                            </section>

                        </div>
                    ))};
                    <div><br></br></div>
                </div>
            </div>
        </div>
    );
};

