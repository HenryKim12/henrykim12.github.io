import React, { useState } from 'react'
import "./Projects.css"
import Fade from "react-reveal"
import ubcImg from "../../../data/images/ubc.jpg"
import studySpotImg from '../../../data/images/studyspot.png'
import gymImg from '../../../data/images/gym.jpg'
import Button from 'react-bootstrap/Button';

function Projects() {  
  const otherProjects = [
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "asd",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "df",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    }
  ]

  const moreProjects = [
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
    {
      title: "FoodForThought",
      description: "asdfasdfg",
      stack: ["react", "scc"],
      link: "sadfa"
    },
  ]

  const [others, setOthers] = useState(otherProjects)

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
              <img className='image' src={ubcImg} alt='ubc-img' width={800} height={500}></img>
            </div>
            <div className='a-detail'>
              <div><h1 className='a-title'>InsightUBC</h1></div>
              <div className='a-description'>
                A UBC database application that allows users to query through UBC course and room information. 
                View the classes that your favorite professor teaches and rank them based on the class average. 
                Find classes and rooms that are closer and more convenient for you to take. 
                Search through every class with specific requirements to find the perfect match for you.
                The search is as easy as asking. 
                <div className='a-source'>
                <ul className='a-stack'>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
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
          </div>
        </Fade>

        <Fade right>
          <div className='b-project'>
            <div className='b-detail'>
                <h1 className='a-title'>StudySpot</h1>
                <div className='a-description'>
                  A rating system for buildings and rooms within UBC campus that allows people to rate, monitor, and create reviews for a given study spot on campus. 
                  Share your experiences from studying in UBC by creating a review for the location.
                  Browse through other buildings to find the best study spot based on star rating, reviews, or capacity.
                  <div className='a-source'>
                    <ul className='a-stack'>
                      <li>React</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>Bootstrap</li>
                      <li>
                        <a className='code-link' href='https://github.com/HenryKim12/studyspot' target="_blank" rel="noreferrer">
                          <Button>Check Code</Button>
                        </a>
                      </li>
                    </ul>
                  </div>
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
              <img className='image' src={gymImg} alt='gym-img' width={800} height={500}></img>
            </div>
            <div className='a-detail'>
              <div><h1 className='a-title'>JavaFit</h1></div>
              <div className='a-description'>
                A fitness application that allows users to record workouts, set new fitness goals, and track macros. 
                Keep track of workouts and meals to monitor your progression towards achieving your goals.
                Configure workouts and meals to your desires and keep note of them through the app's logging. 
                <div className='a-source'>
                  <ul className='a-stack'>
                    <li>Java</li>
                    <li>Swing</li>
                    <li>JUnit</li>
                    <li>
                      <a className='code-link' href='https://github.com/HenryKim12/JavaFit' target="_blank" rel="noreferrer">
                        <Button>Check Code</Button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  )
}

export default Projects