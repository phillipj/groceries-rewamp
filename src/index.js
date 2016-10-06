import injectTapEventPlugin from 'react-tap-event-plugin'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store';

injectTapEventPlugin();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
