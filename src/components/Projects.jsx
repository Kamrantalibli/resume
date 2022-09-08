import React from "react";

const Projects = () => {
  const projects_data = [
    {
      date: "2021",
      title:
        "Form No. 1 (ICT) (Report on the use of information and communication technologies (ICT) in enterprises)",
      subtitle: "https://www.stat.gov.az/menu/4/e-reports/",
      content: "Technologies: Java, JavaServerFaces, MySQL, HTML, CSS",
    },
    {
      date: "2020",
      title: "Statistical examination form on passenger transport",
      subtitle: "https://www.stat.gov.az/menu/4/e-reports/",
      content: "Technologies: Java, JavaServerFaces, MySQL, HTML, CSS",
    },
    {
      date: "2020",
      title: "Reporting of administrative errors",
      subtitle: "https://www.stat.gov.az/menu/4/e-reports/",
      content: "Technologies: Java, JavaServerFaces, MySQL, HTML, CSS",
    },
  ];
  return (
    <div>
      <h4 className="project-title">Projects</h4>
      <ul className="project-timeline">
        {projects_data.map((project, index) => (
          <li key={index}>
            <div className="timeline-data">{project.date}</div>
            <div className="timeline-title">{project.title}</div>
            <div className="timeline-subtitle">{project.subtitle}</div>
            <div className="timeline-content">{project.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
