import React from 'react';
import styles from './Parametres.scss';
import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';

const ParametresPage = () => {
  return (
    <React.Fragment>
      <ServerInfo />
      <UserInfo />


    </React.Fragment>
  );
};

export default ParametresPage;
