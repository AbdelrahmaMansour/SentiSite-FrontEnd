import React from 'react'
import './rpassword.css'
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import { Footer } from "../../Containers";
import { Link } from 'react-router-dom';

const Rpassword = () => {
  return (
    <div className="gradient__bg">

        
      <img id='logo2' src={logo2} alt="pro" />
      

      <div className="ss__homeee">
      <img id='logo1' src={logo1} alt="pro" />
        <div className="ss__home-imge">
          
          

        </div>
        <div class="ss__home-headerrr">
            <h2>Reset Password</h2>
            
          </div>
              
      </div>
      
      <div className="insert">


      <p>Password</p>
      <input className='in' type="text" placeholder="**************" />

      <p>Confirm Password</p>
      <input className='in' type="text" placeholder="**************" />

     </div>
      
     <div className='button'>

     <Link to='/signin'><button id="update" type="button">Reset Password</button></Link>

     </div>
     <Footer/>

      </div>
  )
}

export default Rpassword