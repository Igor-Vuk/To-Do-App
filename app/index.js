'use strict';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
import 'bootstrap/scss/bootstrap.scss'

const store = configureStore();
global.store = store;

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>,
  document.getElementById('test-app')
);
