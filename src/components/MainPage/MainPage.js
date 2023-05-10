import React, { useRef } from 'react'
import "./MainPage.css"
import Menu from "../Menu/Menu"
import Profile from "../Profile/Profile"
import About from "../About/About"
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'
import Experience from '../Experience/Experience'
import Button from "react-bootstrap/Button"

const MainPage = () => {
  const aboutRef = useRef(null);

  // const scroll = (ref) => {
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth"
  //   })
  // }

  return (
    <div className="main">
        <Menu aboutRef={aboutRef} />
        <ParticlesBackground />
        <Profile />
        <About className="about-container"/>
        <Skills />
        <Projects />
        <Experience />
        <div className='end-block'>
          <h1>What's Next?</h1>
          <p>Feel free to contact me!</p>
          <Button variant="light" href={"mailto:henryshkim@hotmail.com"} target="_blank" rel="noreferrer">
            Say Hello
          </Button>
        </div>
    </div>
  )
}

export default MainPage