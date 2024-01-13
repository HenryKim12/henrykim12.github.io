import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import "./Menu.css"
import NavLink from 'react-bootstrap/esm/NavLink';
import FadeIn from 'react-fade-in/lib/FadeIn';
import MenuV1 from "../../v1/Menu/Menu"

function Menu() {

  const refreshPage = () => {
    window.location.reload(false)
  }

  const RenderV1 = () => {
    <div>
      <MenuV1 />
    </div>
  }

  return (
    <Navbar className="menu">
      <NavLink className='brand' onClick={refreshPage}>HK</NavLink>
      <Nav>
        <FadeIn className='fade-in-nav'>
          <NavLink className='navlink-right'>About</NavLink>
          <NavLink className='navlink-right'>Experience</NavLink>
          <NavLink className='navlink-right'>Projects</NavLink>
          <NavLink className='nav-link-v' onClick={() => RenderV1}>V</NavLink>
        </FadeIn>
      </Nav>
    </Navbar>
  )
}

export default Menu