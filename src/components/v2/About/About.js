import React from 'react'
import "./About.css"
import Fade from "react-reveal"

function About() {
  return (
    <Fade delay={500}>
      <div className='about'>

        <div className='about-header'>
          <h2>About</h2>
          <hr/>
        </div>

        <div className='about-body'>
          <div>
            <p>
            As a passionate and aspiring software developer, I am dedicated to shaping the future of technology through innovation, creativity, and a strong commitment to 
            continuous learning. I strive to build out solutions that improve the quality, efficiency, and cost of products through scalable code. 
            I am currently pursuing a Bachelors in computer science at the University of British Columbia.
            </p>
            <p>
            Additionally, working as a full stack software developer at Powerex, 
            where I have the opportunity to work on a variety of projects that allow me to reinforce my skills with object-oriented design (OOP), relational databases, 
            and data structures and algorithms using the latest technologies in C# .NET, Python, Azure, and more.
            </p>
            <p>
            I am actively seeking internships to gain hands-on experience in the industry. Feel free to reach out!
            </p>
            <p>Here are a few technologies that I have been working with lately: </p>
          </div>

          <ul className='tech-list'>
            <li>Python</li>
            <li>C# (.NET)</li>
            <li>React</li>
            <li>Snowflake</li>
            <li>Microsoft SQL</li>
          </ul>
        </div>

      </div>
    </Fade>
  )
}

export default About