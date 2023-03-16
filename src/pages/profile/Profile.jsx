import React from "react";
import "./profile.css";
import pro from '../../assets/pro.svg';
import back from '../../assets/back.svg';
import sup from '../../assets/support.svg';
import abo from '../../assets/aboutus.svg';
import log from '../../assets/logout.svg';
import { Link } from "react-router-dom";
import { Footer } from "../../Containers";

const Profile = () => {
  return (
    <div className="gradient__bg">

        
       <Link to='/home'><img id="back" src={back} alt="back" /></Link>
      

      <div className="ss__profilee ">
      <h2>Profile</h2>
        <div className="ss__profile-imge">
          
          <img src={pro} alt="pro" />

        </div>
        <div class="ss__profile-headerr">
            <h2>Omar Mohamed</h2>
          </div>
          <Link to='editprofile'><button id="edit" type="button">Edit Profile</button></Link>       
      </div>
      <div className="about">
          <img className="im" src={sup} alt="back" />
          <img className="im" src={abo} alt="back" />
          <img className="im" src={log} alt="back" />
          
        </div>

        <Footer/>

      </div>
  )
}

export default Profile
