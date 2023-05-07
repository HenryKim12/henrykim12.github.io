import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import github from "./github.png";
import linkedin from "./linkedin.png"
import mail from "./mail.png"
import "./Menu.css"

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Henry Kim</Navbar.Brand>
          <Nav className="elements">
            <Nav.Link href={"https://github.com/HenryKim12"} target="_blank" rel="noreferrer">
                <img src={github} alt="github icon" width="20px" height="20px"></img>
            </Nav.Link>

            <Nav.Link href={"https://www.linkedin.com/in/henry-kim-47889b208/"} target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin icon" width="20px" height="20px"></img>
            </Nav.Link>

            <Nav.Link href={"mailto:henryshkim@hotmail.com"} target="_blank" rel="noreferrer">
                <img src={mail} alt="mail icon" width="20px" height="20px"></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menu