import React from 'react';
import styles from './Parametres.scss';
import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

const ParametresPage = () => {
  return (
    <React.Fragment>
      <ServerInfo />
      <UserInfo />
      <PageInfo titlePage='Parametres' />


    </React.Fragment>
  );
};

export default ParametresPage;
