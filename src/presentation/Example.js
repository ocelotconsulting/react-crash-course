import React from 'react'

const Example = ({children}) =>
  <div className='example'>
    <div className='content'>
      {children}
    </div>
  </div>

Example.displayName = 'Example'

Example.propTypes = {}

export default Example
