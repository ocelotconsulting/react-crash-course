import React from 'react'
import LinkButton from './LinkButton'

const LinkButtonExample = () => (
  <LinkButton onClick={() => window.alert('clicked')}>
    {'click me! '}
    <i className='fa fa-bolt'/>
  </LinkButton>
)

LinkButtonExample.propTypes = {}

export default LinkButtonExample
