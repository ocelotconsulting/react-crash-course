import React from 'react'
import {render} from 'react-dom'
import Slide from './presentation/Slide'
import 'prismjs/themes/prism-dark.css'
import 'font-awesome/css/font-awesome.css'
import './styles/styles.scss'

import agent from 'superagent'


const slideNumber = parseInt(location.pathname.split('/')[1], 10)

const redirect = e =>
  window.location.replace('/1')

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
