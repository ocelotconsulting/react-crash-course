import React from 'react'
import T from 'prop-types'

export default class Name extends React.Component {
  static propTypes = {
    prompt: T.string
  }

  static defaultProps = {
    prompt: 'Enter your name:'
  }

  constructor (...args) {
    super(...args)
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  render () {
    // a function that generates a function
    const onChangeFn = propertyName =>
      event => {
        const newState = {}
        newState[propertyName] = event.target.value
        this.setState(newState)
        // or try this one-liner
        // this.setState({[propertyName]: event.target.value})
      }

    return (
      <div>
        <h3>
          {this.props.prompt}
        </h3>
        <h4>First:</h4>
        <input type='text' value={this.state.firstName} onChange={onChangeFn('firstName')}/>
        <h4>Last:</h4>
        <input type='text' value={this.state.lastName} onChange={onChangeFn('lastName')}/>
      </div>
    )
  }
}
