import "./WorkExperienceCardStyles.css";
import React from "react";

const experiences = [
  {
    company: "BBD Software (Placement: AfriBiz Connect)",
    role: "Full Stack Software Developer Intern",
    duration: "Current",
    industry: "Information Technology",
    responsibilities: [
      "Developing and maintaining full-stack web applications using modern JavaScript frameworks and backend technologies.",
      "Building RESTful APIs and integrating third-party services.",
      "Collaborating with senior developers, designers, and product teams to deliver scalable business solutions.",
      "Writing clean, maintainable, and reusable code following best practices and SOLID principles.",
      "Participating in code reviews, debugging, and performance optimization.",
      "Working with version control systems (Git/GitHub) in a collaborative environment."
    ]
  },
  {
    company: "TUT ICEP",
    role: "Software Developer Intern",
    duration: "Feb 2024 – May 2025",
    industry: "Information Technology",
    responsibilities: [
      "Built and maintained full-stack web applications using React.js, Node.js, and MySQL.",
      "Developed and consumed RESTful APIs for secure data communication between systems.",
      "Collaborated with designers, developers, and Scrum Master in an Agile environment.",
      "Performed testing, debugging, and code reviews to improve code quality.",
      "Assisted with deployments and system enhancements based on user feedback."
    ]
  },
  {
    company: "Intern Career",
    role: "Junior Web Developer",
    duration: "2 Months Contract",
    industry: "Information Technology",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Converted UI designs into functional web pages.",
      "Improved website performance and usability.",
      "Worked with version control using GitHub."
    ]
  },
 {
  company: "Shoprite",
  role: "Cashier & Packer",
  duration: "2 Years",
  industry: "Retail",
  responsibilities: [
    "Delivered exceptional customer service while accurately handling daily transactions.",
    "Organized shelves and maintained product availability, ensuring smooth operations.",
    "Collaborated effectively within a fast-paced team environment.",
    "Enhanced communication, time management, and problem-solving skills."
  ]
}

];

const WorkExperienceCard = () => {
  return (
    <section className="experience">
      <h2 className="experience-heading">Work Experience</h2>

      <div className="experience-grid">
        {experiences.map((job, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span>{job.company}</span>
            </div>

            <p className="experience-meta">
              {job.industry} • {job.duration}
            </p>

            <ul>
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceCard;
