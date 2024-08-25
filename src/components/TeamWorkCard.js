import { Link } from "react-router-dom";
import "./TeamWorkCardStyles.css";
import img9 from "../assets/images/img9.jpg";


import React from 'react';

const TeamWorkCard = () => {
    return (
        <div className="pricing">
            <h2 className="pricing-heading">Team Project</h2>
            <div className="card-container">
                
                <div className="card">
                    <img src={img9} alt="image" />
                    <span className="bar"></span>
                    <h3>- Icep -</h3>
                    <p>-ICEP is a community engagement programme initiated by the informatics department of TUT. Said initial was engendered to, amongst other objectives, assist students, who've completed all their theoretical modules, obtain internship.
                        -</p>
                    <Link to="https:/icep.co.za/" className="btn">VIEW</Link>
                    <Link to="https://Admin@icep.co.za" className="btn">SOURCE</Link>
                </div>

                <div className="card">
                    <h3>- Nthome Ridez -</h3>
                    <span className="bar"></span>
                    <p className="btc">My Role Description:</p>
                    <p>- During my time at ICEP, I contributed to the development of the Nthome Rides Web app as a key member of the team. As the primary front-end Developer,
                        I was responsible for designing the user interface and experience (UI/UX) of the system, as well as developing the core features
                        and functionality of the web application. I collaborated closely with my team to ensure a seamless integration of front-end and back-end components, and implemented responsive design principles to ensure cross-platform compatibility.

                      .
                        <br></br>
                        <br></br>
                        Throughout the project, we utilized Trello as our project management tool,
                        leveraging its features to streamline our workflow, track progress, and enhance team collaboration. We created
                        boards, lists, and card to visualize our tasks, deadlines, and dependencies. 
                        Through this project, I demonstrated my ability to work effectively in a team and deliver high-quality results in a fast-paced
                        development envirentment.
. -
                    </p>
                    <Link to="/contact" className="btn">READ MORE...</Link>
                </div>

            </div>
        </div>
    );
}

export default TeamWorkCard;