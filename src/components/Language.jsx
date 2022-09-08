import React from 'react'

const Language = () => {
  const language_data = [
    {
      main: "Azerbaijani",
      proficiency: "Native",
    },
    {
      main: "Turkish",
      proficiency: "Almost Native",
    },
    {
      main: "English",
      proficiency: "Intermediate",
    },
    {
      main: "Russian",
      proficiency: "Elementary",
    },
  ];
  return (
    <div>
      <h3 className="language-title">Language Skills</h3>
      <div className="language-details-inside">
        <ul>
          {
            language_data.map((data,index)=>(
              <li key={index}>
                <span className="language-main">{data.main}</span>     
                <span className="language-proficiency">{data.proficiency}</span>
          </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Language