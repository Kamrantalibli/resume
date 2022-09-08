import React from 'react'

const Certificate = () => {
  const certificate_data = [
    {
      date: "May 2022 - Current",
      title: "Front-End Developer",
      subtitle: "Matrix Training Center",
      content:"Certificate"
    },
  ];
  return (
    <div>
        <h4 className='certificate-title'>Certificates</h4>
        <ul className='certificate-timeline'>
            {certificate_data.map((certificate,index)=>(
              <li key={index}>
              <div className='timeline-data'>{certificate.date}</div>
              <div className='timeline-title'>{certificate.title}</div>
              <div className='timeline-subtitle'>{certificate.subtitle}</div>
              <div className='timeline-content'>{certificate.content}</div>
          </li>
            ))}
        </ul>
    </div>
  )
}

export default Certificate