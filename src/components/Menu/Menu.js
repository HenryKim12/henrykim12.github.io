import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Menu.css"

const Menu = () => {
  const handleScrollAbout = () => {
    window.scrollTo(0, 860);
  };

  const handleScrollSkill = () => {
    window.scrollTo(0, 1350);
  }

  const handleScrollProjects = () => {
    window.scrollTo(0, 2000);
  }

  const handleScrollExperience = () => {
    window.scrollTo(0, 2500);
  }

  return (
    <Navbar className="menu" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="brand">HK</Navbar.Brand>
          <Nav className="elements">
            <Nav.Link onClick={handleScrollAbout}>About me</Nav.Link>
            <Nav.Link onClick={handleScrollSkill}>Skills</Nav.Link>
            <Nav.Link onClick={handleScrollProjects}>Projects</Nav.Link>
            <Nav.Link onClick={handleScrollExperience}>Experience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menu