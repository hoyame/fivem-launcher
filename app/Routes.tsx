import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';

import Home from './components/home/Home';
//import Informations from './components/informations/Informations';
//import Aide from './components/aide/Aide';
//import Options from './components/options/options';

import './app.global.css';

export default function Routes() {
  return (
    <div className="background-color">
      <App>
        <Switch>
          <Route path={routes.HOME} exact component={Home} />

        </Switch>
      </App>
    </div>
  );
}
