import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../constants/routes.json';
import styles from './Navbar.scss';
//import AppButton from '../utils/AppButton';

const Navbar = () => {
  return (
    <div className={styles['nav-pos']}>
      <nav className={styles.nav}>
        <NavLink
          to={routes.HOME}
          activeClassName={styles['nav-button-active']}
          className={styles['nav-button']}
          exact={true}
        >
          ACCUEIL
        </NavLink>

        <NavLink
          to={routes.INFORMATIONS}
          activeClassName={styles['nav-button-active']}
          className={styles['nav-button']}
          exact={true}
        >
          INFORMATIONS
        </NavLink>

        <NavLink
          to={routes.HOME}
          className={styles['nav-button-jouer']}
          exact={true}
        >
          JOUER
        </NavLink>

        <NavLink
          to={routes.CONTENU}
          activeClassName={styles['nav-button-active']}
          className={styles['nav-button']}
          exact={true}
        >
          CONTENU
        </NavLink>

        <NavLink
          to={routes.SETTINGS}
          activeClassName={styles['nav-button-active']}
          className={styles['nav-button']}
          exact={true}
          >
          PARAMETRES
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
