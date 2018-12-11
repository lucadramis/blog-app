import Home from './home'
import About from './about'
import Contact from './contact'
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const AppRouter = () => (
  <Router>
    <div id="menu">
      <Nav>
        <NavItem>
          <NavLink>

            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/about/">About</Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink>
            <Link to="/Contact">Contact</Link>
          </NavLink>
        </NavItem>

      </Nav>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/Contact/" component={Contact} />
    </div>
  </Router>
);

export default AppRouter;
