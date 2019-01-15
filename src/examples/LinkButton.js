import React from 'react'
import T from 'prop-types'
import classnames from 'classnames'

const LinkButton = ({ className, disabled, onClick, children }) => {
  const preventDefaultAndDelegate = event => {
    event.preventDefault()
    onClick(event)
  }

  return disabled ? (
      <span className={classnames('disabled-link', className)}>{children}</span>
    ) : (
      <a href='#' className={className} onClick={preventDefaultAndDelegate}>{children}</a>
    )
}

LinkButton.propTypes = {
  // common pattern - allow consumer to specify a custom class name
  className: T.string,
  // node T.bool and T.func
  disabled: T.bool,
  onClick: T.func.isRequired
}

export default LinkButton
