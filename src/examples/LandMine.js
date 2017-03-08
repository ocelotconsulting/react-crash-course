import {PropTypes as T} from 'react'

const LandMine = ({message}) => {
  throw new Error(message)
}

LandMine.displayName = 'LandMine'

LandMine.propTypes = {
  message: T.string.isRequired
}

export default LandMine
