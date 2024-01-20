import React from 'react'
import "./About.css"
import Button from "react-bootstrap/Button"
import resume from "./Resume, Henry Kim.pdf"

const About = () => {
  return (
    <div className='aboutme'>
        <h1 className="title">About Me</h1>
        <p className='bar'></p>
        <div className='about'>
            <div className='para'>
                <p>Hello! My name is Henry and I am a 3rd year computer science major at the University of British Colombia with a
                    passion for designing and developing applications for the internet. I transferred into computer science so that 
                    I can become more involved in the tech community and leave a digital footprint in this growing industry. I am 
                    excited to become a part of a team that strives towards a common goal and accomplishes a mission. I am a quick 
                    learner, a team player, and an excellent problem solver. I am confident that I can become a valuable asset 
                    to your web developement team. 
                </p>
            </div>
            <Button className='resumeButton' href={resume} target='_blank'>
              Resume
            </Button>
        </div>
    </div>
  )
}

export default About