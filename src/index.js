import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
import App from './App';
import './index.css';
import './base.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <Switch>
            <App />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
