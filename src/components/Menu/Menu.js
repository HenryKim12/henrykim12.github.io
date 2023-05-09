import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Menu.css"
// import {useState} from "react";

const Menu = () => {
  // const [scroll, setScroll] = useState(null);

  // function scrollTo() {

  // }

  return (
    <Navbar className="menu" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>HK</Navbar.Brand>
          <Nav className="elements">
            <Nav.Link>About me</Nav.Link>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Experience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menu