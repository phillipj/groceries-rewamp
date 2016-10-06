import React, { PropTypes } from 'react'

import { observer } from 'mobx-react';

import Checkbox from 'material-ui/Checkbox'
import { ListItem } from 'material-ui/List'

export const GroceryItem = observer(({ grocery }) => {
  const checkbox = <Checkbox checked={grocery.completed} onCheck={() => grocery.completed = !grocery.completed} />

  return <ListItem leftCheckbox={checkbox} primaryText={grocery.text} />
})

GroceryItem.propTypes = {
  grocery: PropTypes.object.isRequired
}
