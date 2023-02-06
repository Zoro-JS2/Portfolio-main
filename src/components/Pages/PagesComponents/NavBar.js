import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
export default function Navbar2(props) {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='Navigation'>
        <Container fluid>
          <Navbar.Brand href='/'>Dmytro</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
              <NavDropdown title='Projects' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='/car'>Car search</NavDropdown.Item>
                <NavDropdown.Item href='/mainBar'>Sushi bar</NavDropdown.Item>
                <NavDropdown.Item href='/updateInfo'>
                  Fetch Users
                </NavDropdown.Item>
                <NavDropdown.Item href='/fetch'>Fetch Posts</NavDropdown.Item>
                <NavDropdown.Item href='/bluecollar'>
                  BlueCollar (website)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/projects'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/security' disabled={props.active}>
                Account settings
              </Nav.Link>
              <Nav.Link
                href='/login'
                className='log-in'
                disabled={props.activeLog}
              >
                Log-in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
