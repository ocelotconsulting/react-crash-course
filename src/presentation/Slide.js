import React from 'react'
import T from 'prop-types'
import Example from './Example'
import examples from '../examples/all'

const Slide = ({ slideNumber, count, name, html }) => {
  const linkProps = (label, index) => ({
    className: label,
    label,
    href: `/${index}`
  })

  const back = slideNumber > 1 ? linkProps('back', slideNumber - 1) : undefined
  const next = slideNumber < count ? linkProps('next', slideNumber + 1) : undefined

  const actionFor = keyCode => {
    switch (keyCode) {
      case 37:
        return back
      case 39:
        return next
    }
  }

  const handleKeyUp = ({ keyCode }) => {
    const action = actionFor(keyCode)
    if (action) {
      window.location = action.href
    }
  }

  const renderLink = props =>
    props ? (<a className={props.className} href={props.href}>{props.label}</a>) : undefined

  const ExampleComponent = examples[name]

  return (
    <div className='slide' tabIndex={1} onKeyUp={handleKeyUp}
         ref={div => div && div.focus()}>
      <div className='content' dangerouslySetInnerHTML={{ __html: html }}/>
      <hr/>
      {ExampleComponent && (
        <Example>
          <ExampleComponent/>
        </Example>
      )}
      <div className='controls'>
        {renderLink(back)}
        {renderLink(next)}
      </div>
    </div>
  )
}

Slide.propTypes = {
  slideNumber: T.number.isRequired,
  count: T.number.isRequired,
  name: T.string.isRequired,
  html: T.string.isRequired
}

export default Slide
