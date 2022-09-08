import React from 'react'
import Profil from '../assets/img/kamran.jpg';

const Profile = () => {
  const profil_data ={
      img:{Profil},
      name:"Kamran Talıblı",
      about:"Front-End Developer"
  }

  return (
    <div>
        <div className="profile">
            <img src={profil_data.img.Profil} alt="" />
        </div>
        <h2>{profil_data.name}</h2>
        <h5 className='opacity-50'>{profil_data.about}</h5>
    </div>
    
  )
}

export default Profile