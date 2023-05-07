import React from 'react'
import "./Skills.css"
import coding from "./coding.png"
import tools from "./tools.png"
import testing from "./testing.png"
import ListGroup from 'react-bootstrap/ListGroup';

const Skills = () => {
  return (
    <div className="skill-container">
        <h1>Skills</h1>

        <div className='skills'>
            <ListGroup className="skill">
            <ListGroup.Item>
                <div className="skill-title">
                    <img src={coding} alt="languagesimg" width="50px" height="50px" />
                    <h6>Languages</h6>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="list">
                    <p>C/C++</p>
                    <p>Java</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>React</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>Python</p>
                </div>
            </ListGroup.Item>
            </ListGroup>


            <ListGroup className="skill">
            <ListGroup.Item>
                <div className="skill-title">
                    <img src={tools} alt="toolsimg" width="50px" height="50px" />
                    <h6>Tools/Environments</h6>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="list">
                    <p>Git/GitHub</p>
                    <p>IntelliJ</p>
                    <p>Visual Studio Code</p>
                    <p>MySQL</p>
                </div>
            </ListGroup.Item>
            </ListGroup>


            <ListGroup className="skill">
            <ListGroup.Item>
                <div className="skill-title">
                    <img src={testing} alt="testingimg" width="50px" height="50px" />
                    <h6>Testing</h6>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="list">
                    <p>JUnit</p>
                    <p>GDB</p>
                    <p>TDD</p>
                    <p>Mocha</p>
                    <p>Chai</p>
                </div>
            </ListGroup.Item>
            </ListGroup>
        </div>
    </div>
  )
}

export default Skills