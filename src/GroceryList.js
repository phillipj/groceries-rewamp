import React, { PropTypes } from 'react'
import { observer } from 'mobx-react';

import { List } from 'material-ui/List'

import { GroceryItem } from './GroceryItem'

export const GroceryList = observer(({ groceries }) => (
  <List>
    {groceries.map((grocery) => (
      <GroceryItem grocery={grocery} key={grocery.id} />
    ))}
  </List>
))

GroceryList.propTypes = {
  groceries: PropTypes.object.isRequired
}
