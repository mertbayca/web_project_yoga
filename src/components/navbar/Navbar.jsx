import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavbarComponent() {
  return (
    <>
      <Navbar className="custom_bg" variant="dark" expand="md">
        <Container>
          <Navbar.Brand className="nav_brand" href="#home">LotusFocus</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white font-weight-bold" style={{fontFamily: 'Open Sans'}} href="#home">Home</Nav.Link>
              <Nav.Link className="text-white font-weight-bold" style={{fontFamily: 'Open Sans'}} href="#About">About Us</Nav.Link>
              <Nav.Link className="text-white font-weight-bold" style={{fontFamily: 'Open Sans'}} href="#testimonial">Testimonials</Nav.Link>
              <Nav.Link className="text-white font-weight-bold" style={{fontFamily: 'Open Sans'}} href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;