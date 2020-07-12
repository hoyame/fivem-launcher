import React, { useState } from 'react';

import ServerInfo from '../utils/ServerInfo/ServerInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

import styles from './Connexion.scss';
import { ButtonProps } from '../informations/Informations';

const ConnexionPage = () => {
  const [state, setState] = useState({
    name: 'Pseudo',
    discord: 'Discord',
    img: 'Lien de la photo de profil'
  })

  const saveData = () => {
    localStorage.removeItem('cPseudo');
    localStorage.removeItem('cDiscord');
    localStorage.removeItem('cImg');

    localStorage.setItem('cPseudo', state.name);
    localStorage.setItem('cDiscord', state.discord);
    localStorage.setItem('cImg', state.img);
  }

  let pp: string;

  if (state.img == 'Lien de la photo de profil') {
    pp = "https://cdn.discordapp.com/avatars/643225867929124874/03d4be07bdddc7b9970f85a3d483b736.png?size=256"
  }

  const name = localStorage.getItem('cPseudo') || state.name;
  const discord = localStorage.getItem('cDiscord') || state.discord;

  const returnComponent = () => {
    return (
      <React.Fragment>
        <div className={styles['connexion-component']}>
          <p className={styles['connexion-title']}>Informations</p>
          <div className={styles['connexion-component-container']}>
            <input className="connexion-component-input" type="text" value={name} onChange={e => setState({ ...state, name: e.target.value })} />
          </div>
          <div className={styles['connexion-component-container']}>
            <input className="connexion-component-input" type="text" value={discord} onChange={e => setState({ ...state, discord: e.target.value })} />
          </div>
          <div className={styles['connexion-component-container']}>
            <input type="text" value={state.img} onChange={e => setState({ ...state, img: e.target.value })} />
          </div>

          <div className={styles['connexion-button']}>
            <ButtonProps title="Sauvegarder" onClick={() => saveData()} />
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
