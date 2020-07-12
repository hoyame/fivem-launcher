import React, { useState } from 'react';

import ServerInfo from '../utils/ServerInfo/ServerInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

import styles from './Connexion.scss';

const ConnexionPage = () => {
  const [state, setstate] = useState({
    name: 'zboub',
    osef: 'zbi'
  })

  const saveInformations = () => {

  }

  const returnComponent = () => {
    return (
      <div className={styles['connexion-component']}>
        <div className={styles['connexion-component-container']}></div>
        <div className={styles['connexion-component-container']}></div>
        <div className={styles['connexion-component-container']}></div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ServerInfo />
      <PageInfo titlePage='Votre Compte' />
      {returnComponent()}

    </React.Fragment>
  );
}

export default ConnexionPage;
