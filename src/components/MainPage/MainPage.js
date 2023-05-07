import React from 'react'
import Menu from "../Menu/Menu"
import Profile from "../Profile/Profile"
import About from "../About/About"
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const MainPage = () => {
  return (
    <div className="main">
        <Menu />
        <Profile />
        <About />
        <Skills />
        <Projects />
    </div>
  )
}

export default MainPage