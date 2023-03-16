import React from "react";
import "./home.css";
import { Navbar } from "../../Components";
import human from '../../assets/human.svg';
import { Footer } from "../../Containers";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="gradient__bg">
      <Navbar />
      <div className="ss__home ">
        <div class="ss__home-header">
            <h2> Enter Your Hashtag</h2>
          </div>
        <div class="ss__home-search shadow-drop-center">
          <input type="text" class="searchTerm" placeholder="| Search For #Hash_tags" />
          <Link to="analysis"><button type="submit" class="searchButton" >Search</button></Link>
        </div>
      </div>
      <Footer/>

      </div>
  )
}

export default Home
