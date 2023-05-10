import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Menu.css"
import {useRef} from "react";

const Menu = () => {
  // const aboutRef = useRef();

  // const handleScroll = (ref) => {
  //   window.scrollTo({
  //     top: ref.current,
  //     behavior: "smooth"
  //   });
  // };

  return (
    <Navbar className="menu" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="brand">HK</Navbar.Brand>
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