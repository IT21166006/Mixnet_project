

import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import { useNavigate, Link,useParams } from "react-router-dom";
import axios from "axios";


export default function ProfileView(){
  const navigate = useNavigate();
  const {id} = useParams();
  const [consultantDetails, setconsultantDetails] = React.useState({
      username: "",
      address: "",
      age: "",
      email: ""
  });
  

  React.useEffect(() => {
      function fetchAllData(){
          axios.get('http://localhost:8070/consultant/get/'+id)
          .then((res) => {
              setconsultantDetails(res.data.consultant)
              console.log(res.data.consultant)
          }).catch((err) => {
              console.log(err);
          });
      }
      fetchAllData();
  }, [])

  //delete
  // function deleteperson(id){
  //     axios.delete('http://localhost:8070/person/delete/' +id)
  //     .then(()=>{
  //         alert("Person Deleted.");
  //         navigate('/');
  //     }).catch((err)=>{
  //         console.log(err)
  //     })
  // }


  return(
      <div>
          <div className="container">
      <div className="Del-profile-title"><h1>Delivery Profile</h1></div></div>
      <br></br>
      <div className="container">
      <div className="Del-profile-Box">
      <form className="row ">
                          <div className="col-md-6">
                              <table>
                                  <tbody>
                                      <div className="form-group">
                                          <tr>
                                              <td class="">Name : </td>
                                              <td>{consultantDetails.username}</td>
                                          </tr>
                                      </div>
                                      <div className="form-group">
                                          <tr>
                                              <td class="">Age : </td>
                                              <td>{consultantDetails.address}</td>
                                          </tr>
                                      </div> 
                                      <div className="form-group">
                                          <tr>
                                              <td class="f-name">Mobile Number : </td>
                                              <td>{consultantDetails.age}</td>
                                          </tr>
                                      </div> 
                                      <div className="form-group">
                                          <tr>
                                              <td class="">vehicleType : </td>
                                              <td>{consultantDetails.email}</td>
                                          </tr>
                                      </div>
                                  </tbody>
                              </table>
                          </div>
                          <button type="button" className="Del-btn-profEdt" onClick={()=>navigate(`/editnow/${consultantDetails._id}`)} >Edit</button>
                          
                      </form>
      </div>
      </div>

      
</div>
 


  );
}