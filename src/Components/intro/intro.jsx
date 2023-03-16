import React from 'react';
import v from '../../assets/SentiSite.mp4'
import './intro.css';
import 'react-html5video/dist/styles.css'
import { DefaultPlayer as Video } from 'react-html5video/dist';
const Intro = () => {
  return (
    <div className="videop">
      <Video 
      loop
      >
        <source src={v} type='video/webm'></source>
      </Video>
    </div>
  );
};

export default Intro;