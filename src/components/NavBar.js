import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <NavLink to="/" activeclassname="active">
        Home
      </NavLink>
      {' '}
      |
      {' '}
      <NavLink to="/hello" activeclassname="active">
        greeting
      </NavLink>
    </ul>
  </div>
);

export default NavBar;
