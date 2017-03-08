import React, {PropTypes as T} from 'react'

const Me = ({name}) =>
  <h3>{`This example has been customized for: ${name}`}</h3>

Me.displayName = 'Me'

Me.propTypes = {
  name: T.string
}

Me.defaultProps = {
  name: '(your name here)'
}

export default Me
