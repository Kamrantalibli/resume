import React from "react";

const Experience = () => {
  const experience_data = [
    {
      date: "November 2022 - Current",
      title: "Front End Developer",
      subtitle: "Matrix Training Center",
      content:"I started working as a Front End Developer Mentor"
    },
    {
      date: "February 2019 - April 2021",
      title: "Full Stack Developer",
      subtitle: "Information Technology Center LLC",
      content:"Starting as a Full Stack Developer in the national company I was a member of the passionate team and learned to be a team player."
    }
  ];
  return (
    <div>
      <h4 className="experience-title">Experience</h4>
      <ul className="experience-timeline">
        {experience_data.map((experience, index) => (
          <li key={index}>
            <div className="timeline-data">{experience.date}</div>
            <div className="timeline-title">{experience.title}</div>
            <div className="timeline-subtitle">{experience.subtitle}</div>
            <div className="timeline-content">{experience.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
