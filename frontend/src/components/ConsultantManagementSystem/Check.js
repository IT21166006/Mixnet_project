import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, Link } from "react-router-dom";

import ProfileImg from "./profile.jpeg";


export default function Check() {
  return (
    <div>
      <div>
      <ProfileSidebar/>

      <div className="content-con">
        <div className="w3-container-con w3-teal">
            <div className="ProfileLeft-con">
              <div className="imgAndIcon"><img src={ProfileImg} alt="Your Picture" className="Profpic-con" />
              {/* new part */}
                <div className="editIcon-con">
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    sx={{ marginLeft: '290px', marginTop:'-100px', width: '50px', height: '50px'}} // Adjust the margin value as needed
                  >
                    <Link to={'/EditProfile'}><EditIcon style={{ width: '25px', height: '28px', color:'white'}} /></Link>
                  </Fab>
                
                </div>
              </div>
              
              <div className="ProfName-con">Shikhar Dhawan</div>
              <div className="ProfAddress-con">Los Angeles in California</div>
            </div>

            <div className="ProfileRight-con">
              <div className="profDetailBox-con">
                <div className="profDetailTopic-con">Area of Advertising</div>
                <div className="profDetail-con">Content Marketing</div>
                <div className="profDetailTopic-con">Years Of Experiance</div>
                <div className="profDetail-con">6 years</div>
              </div>

              <div className="profDetailBox-con">
                <div className="profDetailTopic-con">Area of Advertising</div>
                <div className="profDetail-con">Content Marketing</div>
              </div>

              <div className="profDetailBox-con">
                <div className="profDetailTopic-con">Area of Advertising</div>
                <div className="profDetail-con">Content Marketing</div>
              </div>

              <div className="profDetailBox-con">
                <div className="profDetailTopic-con">Area of Advertising</div>
                <div className="profDetail-con">Content Marketing</div>
              </div>

              

              
            </div>
      

          
        </div>
      </div>

    </div>
    </div>
  )
}


