import React from 'react'
import {render} from 'react-dom'
import Slide from './Slide'
import 'prismjs/themes/prism-dark.css'
import '../styles/styles.scss'

import agent from 'superagent'


const slideNumber = parseInt(location.pathname.split('/')[2], 10)

const redirect = e =>
  console.log(e)

//  window.location.replace('/presentation/1')

if (slideNumber > 0) {
  Promise.all([
    agent.get('/api/slide-count'),
    agent.get(`/api/slides/${slideNumber}`)
  ]).then(([{body: {count}}, {body: {name, html}}]) =>
    render(
      (<Slide slideNumber={slideNumber} count={count} name={name} html={html}/>),
      document.getElementById('main')
    )
  ).catch(redirect)
} else {
  redirect()
}
