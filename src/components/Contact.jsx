import React from "react";

const Contact = () => {
  const contact_data = [
    {
      icon: "fa-brands fa-github",
      title: "Github",
      value: "@kamrantalibli",
      link: "https://github.com/Kamrantalibli",
    },
    {
      icon: "fa-brands fa-linkedin-in",
      title: "Linkedin",
      value: "@kamrantalibli",
      link: "https://www.linkedin.com/in/kamrantalibli/",
    },
    {
      icon: "fa-regular fa-envelope",
      title: "Email",
      value: "bytalibli2@gmail.com",
      link: "mailto:bytalibli2@gmail.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Mobile",
      value: "+994 51 355 88 10",
      link: "#",
    },
  ];
  return (
    <div>
      <h3 className="contact-title">Contact Details</h3>
      <div className="contact-details-inside">
        <ul>
          {contact_data.map((data, index) => (
            <li key={index}>
              <a href={data.link}>
                <div className="avatar">
                  <i className={data.icon}></i>
                </div>
                <div className="contact-content">
                  <span className="main">{data.value}</span>
                  <h6>{data.title}</h6>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
