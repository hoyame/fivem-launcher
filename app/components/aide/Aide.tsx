import React from 'react';
import styles from './Aide.scss';
import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';

const AidePage = () => {
  return (
    <React.Fragment>
      <ServerInfo />
      <UserInfo />


    </React.Fragment>
  );
};

export default AidePage;
