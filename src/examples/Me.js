import React from 'react'
import T from 'prop-types'

const Me = ({ name }) =>
  <h3>{`This example has been customized for: ${name}`}</h3>

Me.propTypes = {
  name: T.string
}

Me.defaultProps = {
  name: '(your name here)'
}

export default Me
