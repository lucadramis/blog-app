import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
          
        </Nav>
        <hr />
        
      </div>
    );
  }
}