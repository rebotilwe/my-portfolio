import "./SkillCardStyles.css";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaWordpress, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFirebase, SiDotnet, SiStripe } from "react-icons/si";
import { MdAccessTime, MdPeople, MdLightbulb, MdChat } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";


// Technical Skills
const technicalSkills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js / React Native", icon: <FaReact /> },
  { name: "C++", icon: <FaDatabase /> }, // Generic icon for C++
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js / Express.js", icon: <FaNodeJs /> },
  { name: "ASP.NET", icon: <SiDotnet /> },
  { name: "SQL / MySQL", icon: <FaDatabase /> },
  { name: "Firebase / Hosting", icon: <SiFirebase /> },
  { name: "Git / GitHub", icon: <FaGitAlt /> },
  { name: "Tailwind CSS / Bootstrap", icon: <SiTailwindcss /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "REST APIs & Integration", icon: <AiOutlineApi /> },
  { name: "Payment Gateways", icon: <SiStripe /> },

  { name: "MVC Architecture", icon: <SiDotnet /> },
];

// Professional Skills
const professionalSkills = [
  { name: "Problem Solving", icon: <MdLightbulb /> },
  { name: "Communication", icon: <MdChat /> },
  { name: "Time Management", icon: <MdAccessTime /> },
  { name: "Team Collaboration", icon: <MdPeople /> },
];

const SkillCard = () => {
  return (
    <section className="skill">
      <h2 className="skill-heading">Core Skills & Competencies</h2>

      {/* Technical Skills */}
      <h3 className="skill-subheading">Technical Skills</h3>
      <div className="skill-grid">
        {technicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Professional Skills */}
      <h3 className="skill-subheading">Professional Skills</h3>
      <div className="skill-grid">
        {professionalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCard;
