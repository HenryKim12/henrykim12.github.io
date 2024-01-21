import React from 'react'
import "./About.css"
import Fade from "react-reveal"
import { Icon } from '@iconify/react';

function About() {
  return (
    <Fade>
      <div className='about'>

        <div className='about-head'>
          <p>Let Me Tell You About Myself</p>
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
            <p>Here are technologies that I am familiar most with: </p>
          </div>

          
          <div className='tech-list-row'>
            <div className='skill'>
              <Icon className='icon' icon="logos:python" width="50px" height="50px" color='white'/>
              <p>Python</p>
            </div>
            <div className='skill'>
              <Icon className='icon' icon="devicon:csharp" width="50px" height="50px" color='white'/>
              <p>C# (.NET)</p>
            </div>
            <div className='skill'>
              <Icon className='icon' icon="logos:c-plusplus" width="50px" height="50px" color='white'/>
              <p>C++</p>
            </div>
            <div className='skill'>
              <Icon className='icon' icon="logos:java" width="50px" height="50px" color='white'/>
              <p>Java</p>
            </div>
            <div className='skill'>
              <Icon className='icon' icon="logos:javascript" width="50px" height="50px" color='white'/>
              <p>JavaScript</p>
            </div>
            <div className='skill'>
              <Icon className='icon' icon="devicon:typescript" width="50px" height="50px" color='white'/>
              <p>TypeScript</p>
            </div>
          </div>
          <div className='tech-list-row'>
            <div className='skill'>
              <Icon className='icon' icon="vscode-icons:file-type-html" width="50px" height="50px" color='white'/>
              <p>HTML</p>
            </div>
            <div className='skill'>
              <Icon className='icon' icon="vscode-icons:file-type-css" width="50px" height="50px" color='white'/>
              <p>CSS</p>
            </div>
            <div className='skill'>
                <Icon className='icon' icon="logos:react" width="50px" height="50px" color='white'/>
                <p>React</p>
              </div>
              <div className='skill'>
                <Icon className='icon' icon="devicon:azure" width="50px" height="50px" color='white'/>
                <p>Azure</p>
              </div>
              <div className='skill'>
                <Icon className='icon' icon="logos:snowflake-icon" width="50px" height="50px" color='white'/>
                <p>Snowflake</p>
              </div>
              <div className='skill'>
                <Icon className='icon' icon="devicon:microsoftsqlserver" width="50px" height="50px" color='white'/>
                <p>MSSQL</p>
              </div>
          </div>
        </div>

      </div>
    </Fade>
  )
}

export default About