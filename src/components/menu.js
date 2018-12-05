import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
        
      </div>
    );
  }
}