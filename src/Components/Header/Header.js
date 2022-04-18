import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar
        sticky="top"
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" href="#homePage">
            Study Buddy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/homePage"}>
                Home
              </Nav.Link>
              <Nav.Link href="homePage#services">Services</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>User Name</Nav.Link>
              {user ? 
                <Nav.Link eventKey={2} onClick={handleSignOut}> 
                  Sign Out
                </Nav.Link>
               : 
                <Nav.Link eventKey={2} as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
