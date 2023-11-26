
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png'; // Update the path to your logo image
import '../css/header.css'; // Make sure to import your CSS file
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useWindowDimensions } from '../common';

function Header({handleAboutSection, handleContactSection}) {

  const { width } = useWindowDimensions();
  let show = width > 991;


  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`navbar`}>
          <Container>
            <Navbar.Brand href="/">
              <img className='logo' src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={`navbar_toggle`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className={`custom-close-button`}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} href="/" >
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="menu">
                  {
                    show ?
                      <>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link  onClick={handleAboutSection}>About</Nav.Link>
                        <Nav.Link onClick={handleContactSection}>Contacts</Nav.Link>
                      </>
                      :
                      <>
                        <Nav.Link href="/">Home</Nav.Link>
                        <hr />
                        <Nav.Link href="/">About</Nav.Link>
                        <hr />
                        <Nav.Link href="/">Contacts</Nav.Link>
                      </>
                  }
                  <Navbar.Brand href="/" className='mobile_div'>
                    <img className='logo-mobile' src={logo} alt="logo" />
                  </Navbar.Brand>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;



