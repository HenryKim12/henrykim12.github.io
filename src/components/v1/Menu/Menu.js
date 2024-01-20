import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Menu.css"

const Menu = (props) => {
  const handleScrollAbout = () => {
    window.scrollTo({
      top: props.aboutRef.current.offsetTop,
      behavior: "smooth"
    })
  };

  const handleScrollSkill = () => {
    window.scrollTo({
      top: props.skillsRef.current.offsetTop,
      behavior: "smooth"
    })
  }

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