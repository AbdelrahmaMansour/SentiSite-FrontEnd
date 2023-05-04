import { React, useEffect, useState } from "react";
import "./signin.css";
import emailimg from "../../assets/Email.svg";
import openEye from "../../assets/openEye.svg";
import closedEye from "../../assets/closedEye.svg";
import lc from "../../assets/logo1.svg";
import google from "../../assets/google.svg";
import twitter from "../../assets/twitter.svg";
import facebok from "../../assets/facebook.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../redux/actions";


const Signin = () => {
  const user = useSelector((state) => state.data.user);
  const navigate = useNavigate();
  useEffect(() => {

    if (user) {
      navigate("/home", { replace: true });
    }
  }, [user]);

  const preventCopyPaste = (e) => {
    e.preventDefault()
    alert("Copying and pasting is not allowed!")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hide, setHide] = useState(true);
  const [pass, setPass] = useState("password");

  function hideTogel() {
    if (hide) {
      setHide(false);
      setPass("text");
    } else {
      setHide(true);
      setPass("password");
    }
  }
  
  const dispatch = useDispatch()


  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
        setEmail("");
        setPassword("");
  };

  return (
    <div className='gradient__bg'>
      <div className='ss__signin section__padd'>
        <div className='ss__signin-start'>
          <div className='ss__signin-container'>
            <div className='ss__signin-container_header'>
            <Link to='/'><img src={lc} alt='logo' /></Link>
              <h1>WELCOME BACK !</h1>
            </div>
            <form>
              <div className='ss__signin-container_input-place'>
                <div className='ss__signin-input_with_tag'>
                  <p>Email</p>
                  <input
                    type='email'
                    name='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <img src={emailimg} alt='email' />
              </div>
              <div className='ss__signin-container_input-place'>
                <div className='ss__signin-input_with_tag'>
                  <p>Password</p>
                  <input
                    type={pass}
                    name='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {hide ? (
                  <img src={openEye} alt='openEye' onClick={hideTogel} />
                ) : (
                  <img src={closedEye} alt='closedEye' onClick={hideTogel} />
                )}
              </div>

              <div className='ss__signin-links_iconss'>
                <img src={twitter} alt='logo' />
                <img src={facebok} alt='logo' />
                <img src={google} alt='logo' />
              </div>
              <p className='ss__signin-forget'>
                <Link to='/f'> Forgot you password?</Link>
              </p>
              <p id='ss__signin-al'>
                Don't have an account?
                <Link to='/signup'>
                  {" "}
                  <span id='ss__signin-si'>Sign Up</span>
                </Link>
              </p>
              <div className='ss__signin-links_iconss'>
                <button
                  id='ss__signin-button'
                  type='submit'
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
