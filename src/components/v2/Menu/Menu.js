import React, { useRef } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import "./Menu.css"
import NavLink from 'react-bootstrap/esm/NavLink';
import FadeIn from 'react-fade-in/lib/FadeIn';
// import MenuV1 from "../../v1/Menu/Menu"

const Menu = (props) => {

  const refreshPage = () => {
    window.location.reload(false)
  }

  const handleScrollAbout = () => {
    window.scrollTo({
      top: props.aboutRef.current.offsetTop,
      behavior: "smooth"
    })
  };

  const handleScrollProjects = () => {
    window.scrollTo({
      top: props.projectsRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  const handleScrollExperience = () => {
    window.scrollTo({
      top: props.experienceRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  // const RenderV1 = () => {
  //   <div>
  //     <MenuV1 />
  //   </div>
  // }

  return (
    <Navbar className="menu">
      <NavLink className='brand' onClick={refreshPage}>HK</NavLink>
      <Nav>
        <FadeIn className='fade-in-nav'>
          <NavLink className='navlink-right' onClick={handleScrollAbout}>About</NavLink>
          <NavLink className='navlink-right' onClick={handleScrollExperience}>Experience</NavLink>
          <NavLink className='navlink-right' onClick={handleScrollProjects}>Projects</NavLink>
        </FadeIn>
      </Nav>
    </Navbar>
  )
}

export default Menu