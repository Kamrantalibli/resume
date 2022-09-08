import React from 'react'

const Education = () => {
  const education_data = [
    {
      date: "2021 - Current ",
      title: "Accounting and Auditing MBA",
      subtitle: "Azerbaijan State University of Economics",
      content:"Master Degree"
    },
    {
      date: "2017 - 2021",
      title: "Computer Science",
      subtitle: "Azerbaijan State Oil and İndustry University",
      content:"Bachelor Degree"
    },
  ];
  return (
    <div>
        <h4 className='education-title'>Education</h4>
        <ul className='education-timeline'>
            {education_data.map((education,index)=>(
              <li key={index}>
              <div className='timeline-data'>{education.date}</div>
              <div className='timeline-title'>{education.title}</div>
              <div className='timeline-subtitle'>{education.subtitle}</div>
              <div className='timeline-content'>{education.content}</div>
          </li>
            ))}
        </ul>
    </div>
  )
}

export default Education