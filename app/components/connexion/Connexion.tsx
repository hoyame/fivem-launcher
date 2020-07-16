import React, { useState } from 'react';

import ServerInfo from '../utils/ServerInfo/ServerInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

import styles from './Connexion.scss';
import { ButtonProps } from '../informations/Informations';

const ConnexionPage = () => {
  const [state, setState] = useState({
    name: localStorage.getItem('aPseudo') || 'Pseudo',
    discord: localStorage.getItem('aDiscord') || 'Discord',
    img: localStorage.getItem('aImg') || 'Lien de la photo de profil'
  })

  const saveData = () => {
    localStorage.removeItem('aPseudo');
    localStorage.removeItem('aDiscord');
    localStorage.removeItem('aImg');

    localStorage.setItem('aPseudo', state.name);
    localStorage.setItem('aDiscord', state.discord);
    localStorage.setItem('aImg', state.img);
  }

  let pp: string;

  if (state.img == 'Lien de la photo de profil') {
    pp = "https://cdn.discordapp.com/avatars/643225867929124874/03d4be07bdddc7b9970f85a3d483b736.png?size=256"
  } else {
    pp = state.img
  }

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
