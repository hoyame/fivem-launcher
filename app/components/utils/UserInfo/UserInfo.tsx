import React from 'react';
import styles from './UserInfo.scss'

const UserInfo = () => {
  return (
    <React.Fragment>
      <div className={styles['user-info']}>
        <p className={styles['user-info-name']}>Hoyame</p>
        <p className={styles['user-info-discord']}>hoyame#0004</p>
      </div>

      <div className={styles['user-logo']}>
        <img className={styles['user-logo-img']} src="https://cdn.discordapp.com/avatars/643225867929124874/a_7f21ec8fd06167ab89bc49a8e6090c14.gif?size=256"></img>
      </div>
    </React.Fragment>
  );
}

export default UserInfo;
