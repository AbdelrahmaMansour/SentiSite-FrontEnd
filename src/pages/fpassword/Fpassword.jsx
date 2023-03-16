import React from 'react'
import './fpassword.css'
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import { Footer } from "../../Containers";
import { Link } from 'react-router-dom';

const Fpassword = () => {
  return (
    <div className="gradient__bg">

        
      <img id='logo2' src={logo2} alt="pro" />
      

      <div className="ss__homeee">
      <img id='logo1' src={logo1} alt="pro" />
        <div className="ss__home-imge">
          
          

        </div>
        <div class="ss__home-headerrr">
            <h2>Forgot Password</h2>
            
          </div>
              
      </div>
      
      <div className="insert">


      <p>User Name</p>
      <input className='in' type="text" placeholder="Omar_Mohamed" />

     </div>
      
     <div className='button'>

     <Link to='/r'><button id="update" type="button">Forgot Password</button></Link>
     <Link to='/signin'><p id='re'>Return To Login</p></Link>

     </div>
     <Footer/>

      </div>
  )
}

export default Fpassword