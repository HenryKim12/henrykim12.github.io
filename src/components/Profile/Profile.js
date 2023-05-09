import React from 'react'
import github from "./github.png"
import linkedin from "./linkedin.png"
import mail from "./mail.png"
import "./Profile.css"
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'

const Profile = () => {
  return (
    <div>
      <ParticlesBackground />
      <div className='profile'>
          <h1 className='name'>Henry Kim</h1>
          <h5 className='degree'>Computer Science Student, Year 3</h5>
          <p>I am seeking an intern opportunity for September 2023</p>
          <div className="socials">
            <a className="social" href={"https://github.com/HenryKim12"} target="_blank" rel="noreferrer">
                <img src={github} alt="github icon" width="30px" height="30px"></img>
            </a>

            <a className="social" href={"https://www.linkedin.com/in/henry-kim-47889b208/"} target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin icon" width="30px" height="30px"></img>
            </a>

            <a className="social" href={"mailto:henryshkim@hotmail.com"} target="_blank" rel="noreferrer">
                <img src={mail} alt="mail icon" width="30px" height="30px"></img>
            </a>
          </div>
      </div>
    </div>
  )
}

export default Profile