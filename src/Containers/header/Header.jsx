import React from 'react'
import './header.css'
import Intro from '../../Components/intro/intro'
import { Link } from "react-router-dom";


const Header = () => {
  return(

    <div className="ss__header section__padding">
      <div className="ss__header-content">
        <h1 className="gradient__text">Sentisite</h1>
        <p>We are making a sentiment analysis for Twitter that involves analyzing text data to determine the sentiment or emotion expressed by the user.</p>

        <div className="ss__header-content__input">
          <Link to="signup"><button type="button">Get Started</button></Link>
        </div>

        
    </div>

    <div className="ss__header-image">
      <Intro/>
      </div>
    </div>
  )
}

export default Header