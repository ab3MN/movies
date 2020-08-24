import React from 'react';
import { NavLink } from 'react-router-dom';

const ativeStyle = {
  color: 'fuchsia',
  textDecoration: 'none',
  fontWeight: '500',
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/home" exact activeStyle={ativeStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={ativeStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
