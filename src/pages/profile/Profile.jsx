import React from "react";
import "./profile.css";
import pro from "../../assets/pro.svg";
import back from "../../assets/back.svg";
import sup from "../../assets/support.svg";
import abo from "../../assets/aboutus.svg";
import log from "../../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../Containers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logoutInitiate } from "../../redux/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.data.user);
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <div className='gradient__bg'>
      <img id='back' onClick={() => navigate(-1)} src={back} alt='back' />

      <div className='ss__profilee '>
        <h2>Profile</h2>
        <div className='ss__profile-imge'>
          <img src={pro} alt='pro' />
        </div>
        <div className='ss__profile-headerr'>
          <h2>Omar Mohamed</h2>
        </div>
        <Link to='editprofile'>
          <button id='edit' type='button'>
            Edit Profile
          </button>
        </Link>
      </div>
      <div className='about'>
        <img className='im' src={sup} alt='back' />
        <img className='im' src={abo} alt='back' />
        <img
          className='im'
          src={log}
          onClick={() => {
            if (user) {
              dispatch(logoutInitiate());
            }
          }}
          alt='back'
        />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
