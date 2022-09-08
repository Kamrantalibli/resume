import React from 'react'
import Certificate from './Certificate'
import Contact from './Contact'
import Development from './Development'
import Education from './Education'
import Experience from './Experience'
import Hobbies from './Hobbies'
import Interpersonal from './Interpersonal'
import Language from './Language'
import Profile from './Profile'
import Projects from './Projects'


const App = () => {
  return (
    <div className='content'>
      <div className='left-content'>
        <div className="border-one"></div>
        <div className="border-two"></div>
        <div className="border-three"></div>
        <div className="border-four"></div>
        
        <Profile />
        <div className="left-content-inside">
        <Contact />
        <Language/>
        <Development/>
        <Hobbies/>
        </div>
      </div>
      <div className='right-content'>
        <Experience/>
        <Projects />
        <Education/>
        <Certificate/>
        <Interpersonal />
      </div>
    </div>
  )
}

export default App