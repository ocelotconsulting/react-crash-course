import React from 'react'

export default class SearchField extends React.Component {
  static propTypes = {}

  constructor (...args) {
    super(...args)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onKeyUp ({ keyCode }) {
    if (keyCode === 114 && this.input) {
      this.input.focus()
    }
  }

  componentDidMount () {
    document.addEventListener('keyup', this.onKeyUp)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.onKeyUp)
  }

  inputRef = input => {
    this.input = input
  }

  render () {
    return (
      <div>
        <h5>Press F3 to focus on this search field</h5>
        <input type='text' placeholder='search' ref={this.inputRef}/>
      </div>
    )
  }
}
