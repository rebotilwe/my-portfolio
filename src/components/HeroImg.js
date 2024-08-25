import "./HeroImgStyles.css";
import React from 'react';
import pic1 from '../assets/images/pic1.jpg';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={pic1} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI! I'M REBOTILWE MOKIBA.</p>
        <h1>FULL STACK SOFTWARE DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>

      </div>
    </div>
  );
}

export default HeroImg;