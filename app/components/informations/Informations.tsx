import React from 'react';
import ServerInfo from '../utils/ServerInfo/ServerInfo';
import UserInfo from '../utils/UserInfo/UserInfo';
import PageInfo from '../utils/PageInfo/PageInfo';
import styles from './Informations.scss';


interface IInformations {
  title: string;
  data: string;
}

interface IInformationsButtons {
  title: string;
  onClick?: () => void;
}


const InformationsProps :  IInformations[] = [
  { title: 'Version', data: 'v.0.0.1' },
  { title: 'Joueurs Connectées', data: '128/128' },
  { title: 'Steam HEX', data: 'steam:fbezuiybfubzd4' },
  { title: 'Heures de jeu', data: '651h' },
  { title: 'Nom Steam', data: 'Hagun Jezeir' }
]

const InformationsButtonsProps : IInformationsButtons[] = [
  { title: 'Discord', onClick: () => console.log('1') },
  { title: 'Vote', onClick: () => console.log('1') },
  { title: 'Règlement', onClick: () => console.log('1') },
  { title: 'Wiki', onClick: () => console.log('1') },
]

const InformationsButtonsPropsTwo : IInformationsButtons[] = [
  { title: 'Don', onClick: () => console.log('1') },
  { title: 'Twitter', onClick: () => console.log('1') },
  { title: 'Boutique', onClick: () => console.log('1') },
  { title: 'Site', onClick: () => console.log('1') },
]

const InformationsPage = () => {
  const InformationPageProps: React.FC<IInformations> = (props: IInformations) => {
    return (
      <div className={styles['informations-props-component']}>
        <p className={styles['informations-props-title']}>{props.title}</p>
        <p className={styles['informations-props-data']}>{props.data}</p>
      </div>
    );
  }

  const InformationButtonsProps: React.FC<IInformationsButtons> = (props: IInformationsButtons) => {
    return (
      <div className={styles['informations-buttons-component']}>
        <p onClick={props.onClick}>{props.title}</p>
      </div>
    );
  }

  const GetInformationPageProps = () => {
    return InformationsProps.map((item, k) => {
      return (
        <InformationPageProps key={k} {...item} />
      )
    })
  }

  const GetInformationButtonsProps = () => {
    return InformationsButtonsProps.map((item, k) => {
      return (
        <InformationButtonsProps key={k} {...item} />
      );
    })
  }

  const GetInformationButtonsPropsTwo = () => {
    return InformationsButtonsPropsTwo.map((item, k) => {
      return (
        <InformationButtonsProps key={k} {...item} />
      );
    })
  }

  return (
    <React.Fragment>
      <ServerInfo />
      <PageInfo titlePage='Informations' />
      <UserInfo />

      <div className={styles['informations-refresh-button']}>
        <p onClick={() => {return null}}>Refresh</p>
      </div>

      <div className={styles['informations-page-props']}>
        {GetInformationPageProps()}
      </div>

      <div className={styles['informations-buttons-props']}>
        {GetInformationButtonsProps()}
      </div>

      <div className={styles['informations-buttons-props']}>
        {GetInformationButtonsPropsTwo()}
      </div>

    </React.Fragment>
  );
};

export default InformationsPage;
