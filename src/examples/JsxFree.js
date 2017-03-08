import React from 'react'

const JsxFree = () =>
  React.createElement('div', {}, [
    React.createElement('h4', {key: 0}, ['TODO']),
    React.createElement('ul', {key: 1}, [
      React.createElement('li', {key: 0}, ['Pick up dry cleaning']),
      React.createElement('li', {key: 1}, ['Feed the cat'])
    ])
  ])

JsxFree.displayName = 'JsxFree'

JsxFree.propTypes = {}

export default JsxFree
