import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import Bobo1 from '../assets/images/Bobo1.jpeg';
import Bobo2 from '../assets/images/Bobo2.jpeg';
import CVDowloader from "./CVDowloader";
import SkillCard from "./SkillCard";
import WorkExperienceCard from "./WorkExperienceCard";
import { FaGraduationCap } from "react-icons/fa"; // graduation icon

const AboutContent = () => {
    const certificates = [
        { name: "Diploma in Software Development", year: "2024" },
        { name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", year: "2025" },
        { name: "Microsoft AI Fluency Certificate", year: "2025" },
        { name: "Hashgraph Developer Program – Attendance Certificate", year: "2024" },
        { name: "National Senior Certificate", year: "2017" }
    ];

    return (
        <div className="about">

            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    I am a motivated Junior Full Stack Software Developer with hands-on experience building web and mobile applications using modern technologies. I hold a Diploma in Information Technology: Software Development and have practical experience developing scalable solutions using JavaScript, React.js, Node.js, MySQL, and REST APIs.
                    <br /><br />
                    During my internship at TUT ICEP, I worked in an Agile environment where I collaborated closely with designers, developers, and a Scrum Master to deliver production-ready features. My responsibilities included developing and consuming APIs, implementing front-end interfaces, performing testing and debugging, and contributing to code quality through reviews and continuous improvement.
                    <br /><br />
                    I have worked on real-world projects such as an E-Hailing Web and Mobile Application and a Courier Management System, where I implemented features including user authentication, subscriptions, payments, dashboards, notifications, and real-time tracking. I also have exposure to cloud concepts through deploying applications and working with hosted environments.
                    <br /><br />
                    I am passionate about learning new technologies, writing clean and maintainable code, and building solutions that create real value. I am actively growing my skills in cloud technologies, system architecture, and secure application development, and I look forward to contributing to innovative development teams.
                </p>

                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>

                <CVDowloader />

                {/* Certificates Section */}
                <h2 style={{ marginTop: "2rem", color: "#4f46e5" }}>Certificates</h2>
                <ul className="certificates-list">
                    {certificates.map((cert, index) => (
                        <li key={index}>
                            <FaGraduationCap style={{ marginRight: "0.5rem", color: "#10b981" }} />
                            {cert.name} – {cert.year}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={Bobo1} className="img" alt="profile" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={Bobo2} className="img" alt="workspace" />
                    </div>
                </div>
            </div>

            <SkillCard />
            <WorkExperienceCard />

        </div>
    )
}

export default AboutContent;
