import injectTapEventPlugin from 'react-tap-event-plugin'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GroceryStore from './store';
import { fromStorageOrEmpty, saveUponChanges } from './persistence';

const initialGroceries = fromStorageOrEmpty();
const store = new GroceryStore(initialGroceries);

injectTapEventPlugin();
saveUponChanges(store);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
