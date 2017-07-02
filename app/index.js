'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
import 'bootstrap/scss/bootstrap.scss'
const actions = require("actions");
const store = require("configureStore").configure();

global.store = store;

store.subscribe (() => {
  const state = store.getState()
  console.log('New state', state)
})

store.dispatch(actions.startAddTodos())


const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
  </Provider>,
  document.getElementById('test-app')
);
