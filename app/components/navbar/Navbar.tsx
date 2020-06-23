import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes.json';
import styles from './Navbar.scss';
import AppButton from '../utils/AppButton';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to={routes.HOME}
        activeClassName={styles.active}
        className={styles['nav-button']}
        exact={true}
      >
        ACCUEIL
      </NavLink>
    </nav>
  );
};

export default Navbar;
