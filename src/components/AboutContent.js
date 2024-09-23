import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import CVDowloader from "./CVDowloader"; // Updated name to PascalCase
import SkillCard from "./SkillCard";
import WorkExperienceCard from "./WorkExperienceCard";

const AboutContent = () => {
    return (
        <div className="about">

            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    I am a recent graduate in IT Software Development with a strong foundation in computer systems and software principles, passion for crafting innovative solutions through web and mobile development. With one year of hands-on experience gained during my in-service training, I possess a diverse set of skills in IT, including programming languages such as Java, C++, Javascript, HTML, CSS. Development frameworks such as React, Databases such as MySQL. 
                    <br></br>
                    <br></br>
                    My exposure to Agile methodologies, particularly Scrum, has empowered me to embrace iterative development and continuous improvement, collaborate effectively in cross-functional teams, prioritize tasks and manage my time efficiently. By applying Scrum principles, I've become more flexible, productive, and customer-focused in my approach to software development.
                    <br></br>
                    <br></br>
                    As I continue to grow and evolve in this ever-changing field, I am excited about the opportunities to collaborate, learn, and make a meaningful impact. Thank you for visiting my portfolio, and please feel free to explore my projects and reach out to discuss potential collaborations or opportunities.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
                <CVDowloader /> {/* Updated name to PascalCase */}
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img11} className="img" alt="Project screenshot 1" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={img10} className="img" alt="Project screenshot 2" />
                    </div>
                </div>
            </div>

            <SkillCard />

            <WorkExperienceCard />

        </div>
    )
}

export default AboutContent;
