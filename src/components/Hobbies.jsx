import React from "react";

const Hobbies = () => {
  const hobbies_data = [
    "Voice over",
    "Cycling",
    "Acting",
    "Swimming",
    "Presenting",
    "Dakar Rally",
    "Travelling",
    "Gaming",
  ];
  return (
    <div>
      <h3 className="hobbies-title">Hobbies</h3>
      <div className="hobbies-details-inside">
        <ul className="row">
          {hobbies_data.map((hobbie, index) => (
            <li key={index} className="col-6">
              <span className="hobbies-main">{hobbie}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
