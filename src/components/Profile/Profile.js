import React from 'react'
import github from "./github.png"
import linkedin from "./linkedin.png"
import mail from "./mail.png"
import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile'>
        <h1>Henry Kim</h1>
        <h5>Computer Science Major, Year 3</h5>
        <p>I am searching for a position as a software engineer.</p>
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
  )
}

export default Profile