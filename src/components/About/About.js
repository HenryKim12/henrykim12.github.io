import React from 'react'
import "./About.css"
import me from "./aboutme.jpg"

const About = () => {
  return (
    <div className='aboutme'>
        <h1 className="title">About Me</h1>
        <div className='about'>
            <img className="me" src={me} alt="meimg" width="250px" height="250px"></img>
            <div className='para'>
                <p>I am a 3rd year computer science major at UBC with a passion to become a software engineer. 
                    I am excited to become a part of a team that strives towards a common goal and accomplishes a mission. 
                    I am a quick learner, a team player, and an excellent problem solver. I am confident that I can become a valuable
                    asset to any web developement team. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default About