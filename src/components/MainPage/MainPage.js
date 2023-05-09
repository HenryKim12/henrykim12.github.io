import React from 'react'
import Menu from "../Menu/Menu"
import Profile from "../Profile/Profile"
import About from "../About/About"
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'

const MainPage = () => {
  return (
    <div className="main">
        <Menu />
        <ParticlesBackground />
        <Profile />
        <About className="about-container"/>
        <Skills />
        <Projects />
    </div>
  )
}

export default MainPage