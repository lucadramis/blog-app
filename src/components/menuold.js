import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/menu.css'


export default class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        
        <Nav >
          <NavItem>
            <NavLink href="./home.js">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./about.js">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./contact.js">Contact</NavLink>
          </NavItem>
          
        </Nav>
        <hr />
        
      </div>
    );
  }
}