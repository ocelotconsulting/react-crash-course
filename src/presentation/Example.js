import React from 'react'

const Example = ({ children }) =>
  <div className='example'>
    <div className='content'>
      {children}
    </div>
  </div>

Example.propTypes = {}

export default Example
