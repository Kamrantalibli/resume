import React from "react";

const Interpersonal = () => {
  const interpersonal_data = [
    "Ability to work as a part of big team ",
    "Ability to work in stressful environment ",
    "Mentoring and coaching team members ",
    "Encouraging and insipiring people to do their best",
  ];
  return (
    <div>
      <h4 className="interpersonal-title">
        Communication and Interpersonal skills
      </h4>
      <ul className="interpersonal-timeline">
        {interpersonal_data.map((data, index) => (
          <li key={index}>
            <div className="timeline-title">{data}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interpersonal;
