import React from 'react';
import styles from './Parametres.scss';
import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

interface ParametresComponent {
  title: string;
  content: string;
  onClick?: () => void;
}

const ParametresComponentProps : ParametresComponent[] = [
  { title: "Fivem", content: "test" },
  { title: "Fivem", content: "test" }
]

const ParametresPage = () => {
  const ParametresComponents : React.FC<ParametresComponent> = (props: ParametresComponent) => {
    return (
      <div className={styles['parametres-chemins-options-container']}>
        <p className={styles['parametres-chemins-options-title']}>{props.title}</p>
        <p className={styles['parametres-chemins-options-content']}>{props.content}</p>
      </div>
    );
  }

  const GetParametresComponents = () => {
    return ParametresComponentProps.map((item, k) => {
      return (
        <ParametresComponents key={k} {...item} />
      )
    })
  }


  return (
    <React.Fragment>
      <ServerInfo />
      <UserInfo />
      <PageInfo titlePage='Parametres' />

      <div className={styles['parametres-associer-comptes-container']}>
        <p className={styles['parametres-associer-comptes-title']}>Associer des comptes</p>
      </div>

      <div className={styles['parametres-chemins-options']}>
        {GetParametresComponents()}
      </div>

    </React.Fragment>
  );
};

export default ParametresPage;
