import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import MapDetail from './pages/MapDetail';
import Main from './pages/Main';

import AppStore from './stores/AppStore';

import './resource/sass/App.scss';

const appStore = new AppStore();

function App() {
  appStore.init();

  return (
    <Provider appStore={appStore}>
      <Router>
        <Switch>
          <Route path="/map/:mapID">
            <MapDetail />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </Provider>
 );
}

export default App;
