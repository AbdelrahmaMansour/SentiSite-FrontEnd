import { React,useState} from 'react'
import './editprofile.css'
import pro from '../../assets/pro.svg';
import cancel from '../../assets/Cancel.svg';
import { Footer } from "../../Containers";
import { Link } from 'react-router-dom';
import name from "../../assets/name.svg";
import openEye from "../../assets/openEye.svg";
import closedEye from "../../assets/closedEye.svg";

const Editprofile = () => {
  const [hide1, setHide1] = useState(true);
  const [pass1, setPass1] = useState("password");

  const [hide2, setHide2] = useState(true);
  const [pass2, setPass2] = useState("password");

  const [hide3, setHide3] = useState(true);
  const [pass3, setPass3] = useState("password");

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
function hideTogel3() {
  if (hide3) {
    setHide3(false);
    setPass3("text");
  } else {
    setHide3(true);
    setPass3("password");
  }
}
  return (
    <div className="gradient__bg">

        
       <Link to='/home'><img id="can" src={cancel} alt="back" /></Link>
      

      <div className="ss__profile">
      <h2>Edit Profile</h2>
        <div className="ss__editprofile-imge">
          
          <img src={pro} alt="pro" />

        </div>
        <div class="ss__editprofile-header">
            <h2>Change Picture</h2>
            
          </div>
              
      </div>
      <div className='soso'>
      <div className="ssss">
            <div className='ss__signin-container_input-place'>
              <div className='ss__signin-input_with_tag'>
                <p>First Name</p>
                <input type='text' name='First Name' />
              </div>
              <img src={name} alt='name' />
            </div>


          <div className='ss__signin-container_input-place'>
              <div className='ss__signin-input_with_tag'>
                <p>Last Name</p>
                <input type='text' name='Last Name' />
              </div>
              <img src={name} alt='name' />
            </div>



            <div className='ss__signin-container_input-place'>
              <div className='ss__signin-input_with_tag'>
                <p>Old Password</p>
                <input type={pass1} name='Password' />
              </div>
              {hide1 ? (
                <img src={openEye} alt='openEye' onClick={hideTogel1} />
              ) : (
                <img src={closedEye} alt='closedEye' onClick={hideTogel1} />
              )}            
              </div>
            <div className='ss__signin-container_input-place'>
              <div className='ss__signin-input_with_tag'>
                <p>Password</p>
                <input type={pass2} name='Password' />
              </div>
              {hide1 ? (
                <img src={openEye} alt='openEye' onClick={hideTogel2} />
              ) : (
                <img src={closedEye} alt='closedEye' onClick={hideTogel2} />
              )}
            </div>
            <div className='ss__signin-container_input-place'>
              <div className='ss__signin-input_with_tag'>
                <p>Confirm Password</p>
                <input type={pass3} name='Confirm Password' />
              </div>
              {hide2 ? (
                <img src={openEye} alt='openEye' onClick={hideTogel3} />
              ) : (
                <img src={closedEye} alt='closedEye' onClick={hideTogel3} />
              )}
            </div>
            </div>
            </div>
     <div className='button'>

     <button id="updatee" type="button">Update</button>

     </div>
     <Footer/>

      </div>
  )
}

export default Editprofile