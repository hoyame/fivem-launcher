import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';

import HomePage from './components/home/Home';
import InformationsPage from './components/informations/Informations';
import AidePage from './components/aide/Aide';
import SettingsPage from './components/parametres/Parametres';
import ContenuPage from './components/contenu/Contenu';
import ConnexionPage from './components/connexion/connexion';

import './app.global.css';

export default function Routes() {
  return (
    <div className="background-color">
      <App>
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.INFORMATIONS} exact component={InformationsPage} />
          <Route path={routes.AIDE} exact component={AidePage} />
          <Route path={routes.SETTINGS} exact component={SettingsPage} />
          <Route path={routes.CONTENU} exact component={ContenuPage} />
          <Route path={routes.CONNEXION} exact component={ConnexionPage} />
        </Switch>
      </App>
    </div>
  );
}
