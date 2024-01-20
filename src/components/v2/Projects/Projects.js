import React from 'react'
import "./Projects.css"
import Fade from "react-reveal"
import ubcImg from "../../../data/images/ubc.jpg"
import studySpotImg from '../../../data/images/studyspot.png'
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
    <Fade>
      <div className='projects'>
        <div className='projects-header'>
          <h2>Projects</h2>
          <hr/>
        </div>

        <Fade left>
          <div className='a-project'>
            <div className='a-image'>
              <img className='image' src={ubcImg} alt='ubc-img'></img>
            </div>
            <div className='a-detail'>
              <div><h1 className='a-title'>InsightUBC</h1></div>
              <div className='a-description'>
                A UBC database application that allows users to query through UBC course and room information. <br/>
                Having trouble finding a class? Find a class with a high average or a course taught by one of your favorite professors. <br/>
                Need a place to study? Find a room that is open 24/7 with a variety of tables and chairs. <br/>
                The search is as easy as asking. 
              </div>
              <div className='a-source'>
                <ul className='a-stack'>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Mocha</li>
                  <li>Chai</li>
                  <li>
                    <a className='code-link' href='https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=310' target="_blank" rel="noreferrer">
                      <Button>Check Code</Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className='b-project'>
            <div className='b-detail'>
                <h1 className='a-title'>StudySpot</h1>
                <div className='a-description'>
                  A rating system for UBC campus that allows people to monitor, rate, and dsiplay reviews for a given study spot on campus.ddddddddddddddddddsssssssssssssssssssssssssssssss <br />
                </div>
                <div className='a-source'>
                  <ul className='a-stack'>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>
                      <a className='code-link' href='https://github.com/HenryKim12/studyspot' target="_blank" rel="noreferrer">
                        <Button>Check Code</Button>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className='b-image'>
              <img className='image' src={studySpotImg} alt='ss-img' width={800} height={500}></img>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className='a-project'>
            <div className='a-image'>
              <img className='image' src={ubcImg} alt='ubc-img'></img>
            </div>
            <div className='a-detail'>
              <div><h1 className='a-title'>InsightUBC</h1></div>
              <div className='a-description'>
                A UBC database application that allows users to query through UBC course and room information. <br/>
                Having trouble finding a class? Find a class with a high average or a course taught by one of your favorite professors. <br/>
                Need a place to study? Find a room that is open 24/7 with a variety of tables and chairs. <br/>
                The search is as easy as asking. 
              </div>
              <div className='a-source'>
                <ul className='a-stack'>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Mocha</li>
                  <li>Chai</li>
                  <li>
                    <a className='code-link' href='https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=310' target="_blank" rel="noreferrer">
                      <Button>Check Code</Button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
          
      </div>
    </Fade>
  )
}

export default Projects