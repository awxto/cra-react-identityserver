import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history';
import 'spectre.css/dist/spectre.min.css';
import './App.css';

const history = createHashHistory();
const store = configureStore(history);
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
