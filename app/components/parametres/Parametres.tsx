import React, { useState } from 'react';
import { remote } from 'electron';
import styles from './Parametres.scss';
import ServerInfo from '../utils/ServerInfo/ServerInfo'
import UserInfo from '../utils/UserInfo/UserInfo';
import PageInfo from '../utils/PageInfo/PageInfo';

interface ParametresComponent {
  title: string;
  content: string;
  onClick?: () => void;
  onConfirm?: () => void;
  onConfig?: () => void;
}

const folderDialog = (callback: (path: string) => void) => {
  remote.dialog
    .showOpenDialog({ properties: ['openDirectory'] })
    .then(
      result => result.filePaths.length > 0 && callback(result.filePaths[0])
    );
};

const ParametresPage = () => {
  const getGtaPath = localStorage.getItem('gtaPath') || 'Gta';
  const getFivemPath = localStorage.getItem('fivemPath') || 'Fivem';
  const getDownloadPath = localStorage.getItem('downloadPath') || 'Download';

  const [state, setState] = useState({
    fivemPath: getFivemPath,
    gtaPath: getGtaPath,
    downloadPath: getDownloadPath
  });

  const onFivemClick = () => {
    folderDialog(path => setState({ ...state, fivemPath: path }));
  }

  const onGtaClick = () => {
    folderDialog(path => setState({ ...state, gtaPath: path }));
  }

  const onDownloadClick = () => {
    folderDialog(path => setState({ ...state, downloadPath: path }));
  }

  const saveFivem = () => {
    localStorage.removeItem('fivemPath');
    localStorage.setItem('fivemPath', state.fivemPath);
  }

  const saveGta = () => {
    localStorage.removeItem('gtaPath');
    localStorage.setItem('gtaPath', state.gtaPath);
  }

  const saveDownload = () => {
    localStorage.removeItem('downloadPath');
    localStorage.setItem('downloadPath', state.downloadPath);
  }

  const ParametresComponentProps : ParametresComponent[] = [
    { title: "Chemin FiveM", content: state.fivemPath, onConfig: () => onFivemClick(), onConfirm: () => saveFivem() },
    { title: "Chemin Gta V", content: state.gtaPath, onConfig: () => onGtaClick(), onConfirm: () => saveGta() },
    { title: "Chemin Téléchargements", content: state.downloadPath, onConfig: () => onDownloadClick(), onConfirm: () => saveDownload() }
  ]

  const ParametresComponents : React.FC<ParametresComponent> = (props: ParametresComponent) => {
    return (
      <div className={styles['parametres-chemins-options-container']}>
        <p className={styles['parametres-chemins-options-title']}>{props.title}</p>
        <p className={styles['parametres-chemins-options-content']}>{props.content}</p>
        <div className={styles['parametres-chemins-options-button-confirm']} onClick={props.onConfig}>
          <p className={styles['parametres-chemins-options-button-description']}>Config</p>
        </div>

        <div className={styles['parametres-chemins-options-button-config']} onClick={props.onConfirm}>
          <p className={styles['parametres-chemins-options-button-description']}>Confirmer</p>
        </div>
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


      <div className={styles['parametres-chemins-options']}>
        {GetParametresComponents()}

        <div className={styles['parametres-description']}>
          <p className={styles['parametres-description-text']}>
            Si vous voulez modifier/configurer les chemins ci-dessus, veuillez cliquer sur "Config", ça va vous ouvrir une page pour choisir le chemin, ensuite après avoir choisi le chemin, cliquiez sur Confirmer pour sauvegarder les changements
          </p>
        </div>
      </div>

    </React.Fragment>
  );
};

export default ParametresPage;
