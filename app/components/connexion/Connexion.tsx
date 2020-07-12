import React, { useState } from 'react';

import ServerInfo from '../utils/ServerInfo/ServerInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

import styles from './Connexion.scss';

const ConnexionPage = () => {
  const [state, setState] = useState({
    name: 'Pseudo',
    discord: 'Discord',
    img: 'Lien de la photo de profil'
  })

  const pp = "https://cdn.discordapp.com/avatars/643225867929124874/03d4be07bdddc7b9970f85a3d483b736.png?size=256"

  const returnComponent = () => {
    return (
      <React.Fragment>
        <div className={styles['connexion-component']}>
          <p className={styles['connexion-title']}>Informations</p>
          <div className={styles['connexion-component-container']}>
            <input className="connexion-component-input" type="text" value={state.name} onChange={e => setState({ ...state, name: e.target.value })} />
          </div>
          <div className={styles['connexion-component-container']}>
            <input className="connexion-component-input" type="text" value={state.discord} onChange={e => setState({ ...state, discord: e.target.value })} />
          </div>
          <div className={styles['connexion-component-container']}>
            <input type="text" value={state.img} onChange={e => setState({ ...state, img: e.target.value })} />
          </div>
        </div>

        <img className={styles['connexion-photo-container']} src={pp}></img>
      </React.Fragment>

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
