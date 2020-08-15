import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Projects from "../Projects"
import Home from "../Home"
const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">M. Umar Zahir<br>
          </br>
          Software Engineer

          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">About</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>



  )
}

export default NavBar;
