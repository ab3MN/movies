import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const ativeStyle = {
  color: 'fuchsia',
  textDecoration: 'none',
  fontWeight: '600',
};

const Nav = () => (
  <header className={styles.header}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          to="/home"
          exact
          activeStyle={ativeStyle}
          className={styles.navLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to="/movies"
          activeStyle={ativeStyle}
          className={styles.navLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <hr className={styles.hr} />
  </header>
);

export default Nav;
