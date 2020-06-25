import React from 'react';

import styles from './ServerInfo.scss'

const ServerInfo = () => {
 return (
    <React.Fragment>
      <div className={styles['server-info']}>
        <img className={styles['server-info-img']} src="https://cdn.discordapp.com/icons/329623622819905546/aa0c19ef3bc3607262c11b69bad3a572.webp?size=128"></img>
        <p className={styles['server-info-name']}>GTALife</p>
      </div>
    </React.Fragment>
 );

}

export default ServerInfo;
