import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { GroceryForm } from './GroceryForm';
import { GroceryList } from './GroceryList';

const App = observer(({ store }) => (
  <MuiThemeProvider>
    <div>
      <GroceryForm groceries={store.groceries} onAdd={(text) => store.add(text)} />
      <GroceryList groceries={store.groceries} />
    </div>
  </MuiThemeProvider>
))

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
