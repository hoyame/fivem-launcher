import React from 'react';
import styles from './Home.scss';
import ServerInfo from '../utils/ServerInfo/ServerInfo'

const HomePage = () => {
  let playerInfo = {
    "pseudo": "Hoyame",
    "discord": "hoyame#0004",
    "img": "https://cdn.discordapp.com/avatars/643225867929124874/a_7f21ec8fd06167ab89bc49a8e6090c14.gif?size=256"
  }

  const getPlayerInformations = () => {
    return playerInfo
  }

  getPlayerInformations();

  return (
    <React.Fragment>
      <ServerInfo />

      <div className={styles['home-welcome-component']}>
        <p className={styles['home-welcome-text']}>Bienvenue</p>
        <p className={styles['home-welcome-name']}>{playerInfo.pseudo}</p>
      </div>

      <div className={styles['home-profile-component']}>
        <img className={styles['home-profile-img']} src={playerInfo?.img}></img>
        <p className={styles['home-profile-name']}>{playerInfo.pseudo}</p>
        <p className={styles['home-profile-discord']}>{playerInfo.discord}</p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
