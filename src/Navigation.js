import React, { Component } from 'react';
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
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Full Catalog</NavLink>
              </NavItem>
              </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
