import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Lifelong Learning University</NavbarBrand>
            <Nav className="catalognav" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/catalog">Full Catalog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/studentview">Student View</NavLink>
              </NavItem>
              </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
