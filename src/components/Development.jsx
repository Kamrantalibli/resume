import React from "react";

const Development = () => {
  const skills_data = [
    "HTML5",
    "CSS3",
    "SASS/SCSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React Js",
    "Redux",
    "JQuery",
    "Webpack",
    "JSON",
    "MySQL",
    "Java",
    "FireBase",
    "Responsive-design",
    "GIT"
  ];
  return (
    <div>
      <h3 className="development-title">Development Skills</h3>
      <div className="development-details-inside">
        <ul className="row">
          {skills_data.map((skill, index) => (
            <li key={index} className="col-6">
              <span className="development-main">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Development;
