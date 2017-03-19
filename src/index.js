import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';

require('./css/main.scss');

const rootEl = window.document.getElementById('app');
const history = createBrowserHistory();

const renderDom = Component => render(
  <AppContainer>
    <Router history={history} >
      <Component />
    </Router>
  </AppContainer>,
  rootEl
);

renderDom(App);

if (module.hot) {
  module.hot.accept('./App', () => renderDom(App));
}
