import "./SkillCardStyles.css";
import React from 'react';

import html_icon from "../assets/images/html_icon.png";
import css_icon from "../assets/images/css_icon.png";
import js_icon from "../assets/images/JS_icon.png";
import cplus_icon from "../assets/images/c++_icon.png";
import sql_icon from "../assets/images/sql_icon.png";
import nodejs_icon from "../assets/images/nodejs_icon.jpeg";
import react_icon from "../assets/images/react_icon.jpeg";
import firebase_icon from "../assets/images/firebase_icon.jpeg";
import github_icon from "../assets/images/github_icon.jpeg";

const SkillCard = () => {
  return (
    <div className="skill">
        <h2 className="skill-heading">Skills</h2>
        <div className="card-container">
            <div className="card">
                <img src={html_icon} className="image" alt="HTML5 icon" />
                <span className="bar"></span>
                <h3>- HTML5 -</h3>
            </div>

            <div className="card">
            <img src={css_icon} className="image" alt="CSS icon" />
                <span className="bar"></span>
                <h3>- CSS -</h3>
            </div>

            <div className="card">
            <img src={js_icon} className="image" alt="Javascript icon" />
                <span className="bar"></span>
                <h3>- Javascript -</h3>
            </div>

            <div className="card">
            <img src={react_icon} className="image" alt="React icon" />
                <span className="bar"></span>
                <h3>- React -</h3>
            </div>

            <div className="card">
            <img src={cplus_icon} className="image" alt="C++ icon" />
                <span className="bar"></span>
                <h3>- C++ -</h3>
            </div>

            <div className="card">
            <img src={sql_icon} className="image" alt="SQL icon" />
                <span className="bar"></span>
                <h3>- SQL -</h3>
            </div>

            <div className="card">
            <img src={firebase_icon} className="image" alt="Next.js icon" />
                <span className="bar"></span>
                <h3>- Next.js -</h3>
            </div>

            <div className="card">
            <img src={nodejs_icon} className="image" alt="Node.js icon" />
                <span className="bar"></span>
                <h3>- Node.js -</h3>
            </div>

            <div className="card">
            <img src={github_icon} className="image" alt="GitHub icon" />
                <span className="bar"></span>
                <h3>- GitHub -</h3>
            </div>
        </div>
    </div>
  );
}

export default SkillCard;
