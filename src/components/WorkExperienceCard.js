import { Link } from "react-router-dom";
import "./WorkExperienceCardStyles.css";

import React from 'react';


const WorkExperienceCard = () => {
    return (
        <div className="experience">
            <h2 className="experience-heading">Work Experience</h2>
            <div className="card-container">
                <div className="card">
                    <h3>- ICT Industry -</h3>
                    <span className="bar"></span>
                    <p><b>Company name: </b>ICEP</p>
                    <p><b>Position: </b> Front-end Developer</p>
                    <p><b>Duties: </b> Developing Web & Mobile Apps</p>
                    <p><b>Duration: </b>One year</p>
                    <p><b>Reason for leaving:</b> Contract ended</p>
                </div>

                <div className="card">
                <h3>- ICT Industry -</h3>
                    <span className="bar"></span>
                    <p><b>Company name: </b>Intern Career</p>
                    <p><b>Position: </b> Developer</p>
                    <p><b>Duties: </b> Develop websites</p>
                    <p><b>Duration: </b> 2 months</p>
                    <p><b>Reason for leaving:</b> Contract ended</p>
                </div>

                <div className="card">
                    <h3>- Retail Industry -</h3>
                    <span className="bar"></span>
                    <p><b>Company name: </b>Shopritte</p>
                    <p><b>Position: </b> Cashier & a Packer</p>
                    <p><b>Duties: </b> Help customers who are paying also packing shelves</p>
                    <p><b>Duration: </b> 2 Years</p>
                    <p><b>Reason for leaving:</b> Resigned</p>
                </div>

            </div>
        </div>
    );
}

export default WorkExperienceCard;