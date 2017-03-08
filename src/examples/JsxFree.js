import React from 'react'

const JsxFree = () =>
  React.createElement('div', {}, [
    React.createElement('h4', {}, ['TODO']),
    React.createElement('ul', {}, [
      React.createElement('li', {}, ['Pick up dry cleaning']),
      React.createElement('li', {}, ['Feed the cat'])
    ])
  ])

JsxFree.displayName = 'JsxFree'

JsxFree.propTypes = {}

export default JsxFree
