import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom"; 

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar data-bs-theme="dark">
        <Navbar.Brand href="/">Henry Kim</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>home</Nav.Link>
          <Nav.Link onClick={() => navigate("/about")}>about</Nav.Link>
          <Nav.Link onClick={() => navigate("/experience")}>experience</Nav.Link>
          <Nav.Link onClick={() => navigate("/projects")}>projects</Nav.Link>
          <Nav.Link onClick={() => navigate("/contact")}>contact</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default NavBar