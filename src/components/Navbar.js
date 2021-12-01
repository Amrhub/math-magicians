import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar flex-sb-center">
    <span className="navbar-brand">math magicians</span>

    <ul className="navbar-nav">
      <li>
        <NavLink
          exact
          activeClassName="active-link"
          to="/"
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="active-link"
          to="/calculator"
          className="nav-link"
        >
          Calculator
        </NavLink>
        <NavLink
          exact
          activeClassName="active-link"
          to="/quote"
          className="nav-link"
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
