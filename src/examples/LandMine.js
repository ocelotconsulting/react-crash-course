import T from 'prop-types'

const LandMine = ({ message }) => {
  throw new Error(message)
}

LandMine.propTypes = {
  message: T.string.isRequired
}

export default LandMine
