import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar flex-sb-center">
    <span className="navbar-brand">math magicians</span>

    <ul className="navbar-nav">
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/calculator" className="nav-link">
          Calculator
        </NavLink>
        <NavLink to="/quote" className="nav-link">
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
