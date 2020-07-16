import React from 'react';

import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';

import styles from './Contenu.scss'
import PageInfo from '../utils/PageInfo/PageInfo';


interface IOptionsDownload {
  name: string;
  link?: string;
  onChecked?: () => void;
}

interface IContentLinks {
  name: string;
  link?: string;
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

const ContentLinks : IContentLinks[] = [
  { name: 'Comment installer un mod ?'},
  { name: 'Le telechargement est long, d\'ou vien le probleme ?'},
  { name: 'Mon ordinateur supporte les mods ?'},
  { name: 'Comment supprimer un mod ?'},
  { name: 'D\'ou proviennent les mods ?'},
  { name: 'Je peux aller sur GTAOnline avec les mods ?'},
  { name: 'Credits'},
]

const ContenuPage = () => {
  const OptionsDownloadProps : React.FC<IOptionsDownload> = (props: IOptionsDownload) => {
    return (
      <div className={styles['contenu-telechargement-checkbox']}>
        <input className={styles['checkbox']} type="checkbox" />
        <p className={styles['contenu-telechargement-name']}>{props.name}</p>
      </div>
    );
  }

  const ContentLinksProps : React.FC<IContentLinks> = (props: IContentLinks) => {
    return (
      <div className={styles['contenu-liens-utiles-props']}>
        <p className={styles['contenu-liens-utiles-props-title']}>{props.name}</p>
        <p className={styles['contenu-liens-utiles-props-red']}>{">"}</p>
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

  const GetContentLinks = () => {
    return ContentLinks.map((item, k) => {
      return (
        <ContentLinksProps key={k} {...item} />
      )
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

        <div className={styles['contenu-download-button']}>
          <p onClick={() => null}>Download</p>
        </div>
      </div>

      <div className={styles['contenu-progressbar-back']}></div>
      <div className={styles['contenu-progressbar-content']}>
        <p className={styles['contenu-progressbar-pourcentage']}>75%</p>
      </div>

      <div className={styles['contenu-liens-utiles-component']}>
        {GetContentLinks()}
      </div>

    </React.Fragment>
  );
}

//<input type="checkbox" className={styles['checkbox']} />

export default ContenuPage;
