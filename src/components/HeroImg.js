import "./HeroImgStyles.css";
import React from 'react';
import pic1 from '../assets/images/pic1.jpg';


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={pic1} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI! I'M REBOTILWE MOKIBA.</p>
        <h1>FULL STACK SOFTWARE DEVELOPER</h1>
       

      </div>
    </div>
  );
}

export default HeroImg;