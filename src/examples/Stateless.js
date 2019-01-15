/* eslint-disable no-unused-vars */
import React from 'react'
import T from 'prop-types'

class StatelessClass extends React.Component {
  render () {
    return (
      <h3>
        {this.props.title}
        <small>{this.props.subTitle}</small>
      </h3>
    )
  }
}

// equivalent to the above
const Stateless = ({ title, subTitle }) =>
  <h3>
    {title}
    <small>{subTitle}</small>
  </h3>

Stateless.propTypes = {
  title: T.string.isRequired,
  subTitle: T.string.isRequired
}

export default Stateless
