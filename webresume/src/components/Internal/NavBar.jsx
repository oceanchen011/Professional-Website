
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">Ocean Chen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://docs.google.com/document/d/1-M8mQDZPcavVr0MvYRF8iSX5gVwwUj_HxKvpPtB9KWw/edit?usp=sharing" target="_blank">Resume</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ocean-chen-695052272/" target="_blank">LinkedIn</Nav.Link>
            <NavDropdown title="GitHub Repo" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/ochen011" target="_blank">School Repo</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/oceanchen011" target="_blank">Personal Repo</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Navigation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Intro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About Myself</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hobbies & Interests</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Education & Skills</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
