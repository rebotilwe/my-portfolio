import { Link } from "react-router-dom";
import "./TeamWorkCardStyles.css";
import img9 from "../assets/images/img9.jpg";
import image from "../assets/images/image.png"
import React from "react";

const projectsAndExperience = [
  // Team Project
  {
    type: "project",
    img: img9,
    title: "ICEP Community Project",
    role: "Team Member / Front-end Developer",
    description:
      "ICEP is a community engagement program initiated by TUT to help students gain internships and practical experience.",
    responsibilities: [
      "Assisted students in completing practical projects.",
      "Developed interactive front-end components using React.",
      "Collaborated with team members to maintain UI/UX consistency.",
    ],
   view: "https://icep.co.za/",
    source: "mailto:Admin@icep.co.za", 
  },

  // Work Experience
  {
    type: "experience",
        img: image,
    title: "BBD Software (AfriBiz Connect Placement)",
    role: "Full Stack Software Developer Intern",
    duration: "Current",
    industry: "Information Technology",
    responsibilities: [
      "Developed and maintained full-stack web applications using modern JavaScript frameworks and backend technologies.",
      "Built RESTful APIs and integrated third-party services.",
      "Collaborated with senior developers, designers, and product teams to deliver scalable solutions.",
      "Followed clean code practices and participated in code reviews.",
      "Used Git/GitHub for version control in a collaborative environment.",
    ],
    view: "https://afribizconnect.co.za/",
    source: "info@afribizconnect.co.za",
  },
];

const TeamWorkAndExperience = () => {
  return (
    <div className="team-work">
      <h2 className="team-heading">Team Project & Work Experience</h2>
      <div className="team-container">
        {projectsAndExperience.map((item, index) => (
          <div className="team-card" key={index}>
            {item.img && <img src={item.img} alt={item.title} />}
            <h3>{item.title}</h3>
            {item.role && <span className="role">{item.role}</span>}
            {item.duration && item.industry && (
              <p className="meta">
                {item.industry} • {item.duration}
              </p>
            )}
            <p className="description">{item.description}</p>
            {item.responsibilities && (
              <ul className="responsibilities">
                {item.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            )}
            <div className="card-btns">
              {item.view && (
                <Link to={item.view} className="btn">
                  VIEW
                </Link>
              )}
              {item.source && (
                <a
                  href={item.source}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  SOURCE
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamWorkAndExperience;
