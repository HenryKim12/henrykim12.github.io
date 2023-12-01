import React, { useRef } from 'react'
import "./MainPage.css"
import Menu from "../Menu/Menu"
import Profile from "../Profile/Profile"
import About from "../About/About"
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'
import Experience from '../Experience/Experience'
import Next from '../Next/Next'

const MainPage = () => {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const experienceRef = useRef();
  // const topRef = useRef();

  return (
    <div className="main">
        <Menu aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} experienceRef={experienceRef} />
        <ParticlesBackground />
        <Profile />
        <div ref={aboutRef}>
          <About aboutRef={aboutRef} className="about-container"/>
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div>
          <Next />
        </div>
    </div>
  )
}

export default MainPage