import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Main from "../Main"
import Test from "../Test"
import Home from "../Home"
const NavBar = () => {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Spend check</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/main">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/test">test</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/main" component={Main} />
      </div>
    </Router>



  )
}

export default NavBar;
