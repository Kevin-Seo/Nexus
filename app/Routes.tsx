/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PlayPage from './containers/PlayPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.PLAY} component={PlayPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
