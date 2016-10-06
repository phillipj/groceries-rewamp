import React, { Component, PropTypes } from 'react'

import AutoComplete from 'material-ui/AutoComplete'

export const GroceryForm = class GroceryForm extends Component {

  constructor() {
    super()
    this.state = { text: '' }

    this._handleAdd = this._handleAdd.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }

  render() {
    const groceryNames = this.props.groceries.map((g) => g.text)

    return (
      <form onSubmit={this._handleSubmit}>
        <AutoComplete hintText='Ny matvare...'
                      dataSource={groceryNames}
                      filter={AutoComplete.fuzzyFilter}
                      maxSearchResults={5}
                      onNewRequest={this._handleAdd}
                      onUpdateInput={this._handleInput}
                      searchText={this.state.text}
                      fullWidth={true} />
      </form>
    )
  }

  _handleInput(text) {
    this.setState({ text })
  }

  _handleAdd(text) {
    this.props.onAdd(text)
    this.setState({ text: '' })
  }

  _handleSubmit(e) {
    e.preventDefault()
  }
}

GroceryForm.propTypes = {
  groceries: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
}
