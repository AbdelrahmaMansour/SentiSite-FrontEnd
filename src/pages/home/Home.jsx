import React from "react";
import "./home.css";
import { Navbar, Data } from "../../Components";
import { Footer } from "../../Containers";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Home = () => {

  const user = useSelector((state) => state.data.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signup", { replace: true });
    }
  }, []);
  

  const [ne, setNe] = useState(null);
  const [po, setPo] = useState(null);
  const [nu, setNu] = useState(null);


  const [quiry, setQuiry] = useState("");

  const searchFunc = () => {
    axios
      .get(`http://localhost:3030/api/v1/predict/${quiry.replace(/#/, '')}`)
      .then(function (response) {
        setNe(response.data.predictions.negative)
        setPo(response.data.predictions.positive)
        setNu(response.data.predictions.neutral)

      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='gradient__bg'>
      <Navbar />
      <div className='ss__home '>
        <div className='ss__home-header'>
          <h2> Enter Your Hashtag</h2>
        </div>
        <div className='ss__home-search shadow-drop-center'>
          <input
            type='text'
            className='searchTerm'
            placeholder='| Search For #Hash_tags'
            onChange={(e) => setQuiry(e.target.value)}
          />
            <button onClick={searchFunc} type='submit' className='searchButton'>
              Search
            </button>
        </div>
      </div>
      {ne ? <Data ne={ne} po={po} nu={nu} /> : <div></div>}
      <Footer />
    </div>
  );
};

export default Home;
