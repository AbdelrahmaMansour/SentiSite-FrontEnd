import React from 'react';
import footerlogo from '../../assets/footerlogo.svg';
import sea from '../../assets/sea.svg'
import insta from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebok from '../../assets/facebook.svg'

import './footer.css';

const Footer = () => (
  <div>
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">

        <img src={footerlogo} alt="logo" />
        
        <p className="p__opensans">High level experience in Artificial Intelligence and development knowledge, producing quality work.</p>

        <div className="app__footer-links_contact">

        <button type="button">Contact Us</button>

        </div>

        <div className="app__footer-links_icons">
          <img src={twitter} alt="logo" />
          <img src={insta} alt="logo" />
          <img src={facebok} alt="logo" />
        </div>

      </div>
    </div>

    <div className="footer__copyright">
     <p className="p__opensans">@2023 Sentisite. All Rights reserved.</p>
    </div>
    

  </div>
  
  
   <div className="sea">
     <img src={sea} alt="logo" />
   </div>
  </div>
  
);

export default Footer;