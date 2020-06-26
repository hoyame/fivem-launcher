import React from 'react';

import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';
import { setProgressBarBDT } from '../../main.dev';

import styles from './Contenu.scss'
import PageInfo from '../utils/PageInfo/PageInfo';

interface IOptionsDownload {
  name: string;
  link?: string;
  onChecked?: () => void;
}

const OptionsDownload : IOptionsDownload[] = [
  { name: 'Modd 1'},
  { name: 'Modd 2'},
  { name: 'Modd 3'},
  { name: 'Modd 4'},
  { name: 'Modd 5'},
  { name: 'Modd 6'},
  { name: 'Modd 7'},
  { name: 'Modd 8'}
]

const DownloadProgressBar = () => {
  setProgressBarBDT()
}

const ContenuPage = () => {
  const OptionsDownloadProps : React.FC<IOptionsDownload> = (props: IOptionsDownload) => {
    return (
      <div className={styles['contenu-telechargement-checkbox']}>
        <input className={styles['checkbox']} type="checkbox" />
        <p className={styles['contenu-telechargement-name']}>{props.name}</p>
      </div>
    );
  }

  const GetOptionsDownload = () => {
    return OptionsDownload.map((item, k) => {
      return (
        <OptionsDownloadProps key={k} {...item} />
      );
    })
  }

  return (
    <React.Fragment>
      <ServerInfo />
      <UserInfo />
      <PageInfo titlePage='Contenu' />


      <div className={styles['contenu-telechargement-container']}>
        <p className={styles['contenu-telechargement-description']}>Options</p>
        {GetOptionsDownload()}

        <div className={styles['content-download-button']}>
          <p onClick={() => DownloadProgressBar()}>Download</p>
        </div>
      </div>
    </React.Fragment>
  );
}

//<input type="checkbox" className={styles['checkbox']} />

export default ContenuPage;
