import React from 'react'
import Inputs from './Inputs'

export default class InputsExample extends React.Component {
  static propTypes = {}

  constructor (...args) {
    super(...args)
    this.state = {
      description: ''
    }
  }

  render () {
    const onDescriptionChanged = ({ target: { value } }) =>
      this.setState({ description: value })

    return (
      <Inputs id='42' description={this.state.description}
              onDescriptionChanged={onDescriptionChanged}
              onSubmit={() => window.alert('submitted')}/>
    )
  }
}
