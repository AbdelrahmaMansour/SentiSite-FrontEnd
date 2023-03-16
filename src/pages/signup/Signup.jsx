import { React, useState } from "react";
import "./signup.css";
import nameimg from "../../assets/name.svg";
import emailimg from "../../assets/Email.svg";
import openEye from "../../assets/openEye.svg";
import closedEye from "../../assets/closedEye.svg";
import lc from "../../assets/logo1.svg";
import google from "../../assets/google.svg";
import twitter from "../../assets/twitter.svg";
import facebok from "../../assets/facebook.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")

  const [data,setData]= useState({
    name:"",
    email:"",
    password: "",
    rePassword: ""
  })




  const [hide1, setHide1] = useState(true);
  const [pass1, setPass1] = useState("password");

  const [hide2, setHide2] = useState(true);
  const [pass2, setPass2] = useState("password");

  function hideTogel1() {
    if (hide1) {
      setHide1(false);
      setPass1("text");
    } else {
      setHide1(true);
      setPass1("password");
    }
  }

  function hideTogel2() {
    if (hide2) {
      setHide2(false);
      setPass2("text");
    } else {
      setHide2(true);
      setPass2("password");
    }
  }

  const handleSubmit = (e) => {
    setData({
      name:firstName+" "+lastName,
      email:email,
      password: password,
      rePassword: confirmPassword
    })
    axios.post('http://localhost:3030/api/v1/auth/sign-up', 
    data
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    e.preventDefault();
  };

  return (
    <div className='gradient__bg'>
      <div className='ss__signup section__padd'>
      <div className='ss__signup-start'>
        <div className='ss__signup-container'>
        <div className="ss__signup-container_header">
          <img  src={lc} alt='logo' />
          <h1>Create new account</h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div className='ss__signup-container_input-name'>
            <div className='ss__signup-container_input-place'>
              <div className='ss__signup-input_with_tag'>
                <p>First name</p>
                <input type='text' name='First name' onChange={(e)=>setFirstName(e.target.value)} />
              </div>
              <img src={nameimg} alt='name' />
            </div>
            <div className='ss__signup-container_input-place'>
              <div className='ss__signup-input_with_tag'>
                <p>Last name</p>
                <input type='text' name='Last name' onChange={(e)=>setLastName(e.target.value)}/>
              </div>
              <img src={nameimg} alt='name' />
            </div>
          </div>
            <div className='ss__signup-container_input-place'>
              <div className='ss__signup-input_with_tag'>
                <p>Email</p>
                <input type='email' name='Email' onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <img src={emailimg} alt='email' />
            </div>
            <div className='ss__signup-container_input-place'>
              <div className='ss__signup-input_with_tag'>
                <p>Password</p>
                <input type={pass1} name='Password' onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              {hide1 ? (
                <img src={openEye} alt='openEye' onClick={hideTogel1} />
              ) : (
                <img src={closedEye} alt='closedEye' onClick={hideTogel1} />
              )}
            </div>
            <div className='ss__signup-container_input-place'>
              <div className='ss__signup-input_with_tag'>
                <p>Confirm Password</p>
                <input type={pass2} name='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
              </div>
              {hide2 ? (
                <img src={openEye} alt='openEye' onClick={hideTogel2} />
              ) : (
                <img src={closedEye} alt='closedEye' onClick={hideTogel2} />
              )}
            </div>

            <div className='ss__signup-links_iconss'>
              <img src={twitter} alt='logo' />
              <img src={facebok} alt='logo' />
              <img src={google} alt='logo' />
            </div>
            <p id='ss__signup-al'>
              Already A Member?<Link to='/signin'> <span id='ss__signup-si'>Sign In</span></Link>
            </p>
            <div className='ss__signup-links_iconss'>
              <button id='ss__signup-button' type='submit'>
                Create account
              </button>
            </div>
            </form>
        </div>
        </div>
      </div>
      <div className='ss__verify-container'>
        <img src={emailimg} alt="" />
        <h1>Check your email for the verification</h1>      
    </div>
    </div>
  );
};

export default Signup;
