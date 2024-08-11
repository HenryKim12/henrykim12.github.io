import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom"; 
import "./NavBar.css"

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar data-bs-theme="dark" className='nav-container'>
        <Navbar.Brand className='brand' href="/">HK</Navbar.Brand>
        <Container className='link-container'>
          <Nav className='m-auto'>
            <Nav.Link href='/'>0. home</Nav.Link>
            <Nav.Link onClick={() => navigate("/experience")}>1. experience</Nav.Link>
            <Nav.Link onClick={() => navigate("/projects")}>2. projects</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")}>3. contact</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default NavBar