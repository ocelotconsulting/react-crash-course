const fs = require('fs')
const marked = require('marked')
const template = require('lodash/template')
const Prism = require('prismjs')
require('prismjs/components/prism-jsx')

const slides = [
  'intro',
  'about',
  'es2015',
  'basics',
  'component',
  'propsVsState',
  'composition',
  'stateless',
  'children',
  'propTypes',
  'binding',
  'noJsx',
  'lifeCycleMethods'
]

/*
testing

without JSX

component lifecycle

collections

server-side rendering

 */

const toCode = html => `<pre><code class='language-jsx'>${html}</code></pre>`

const resolveSource = line =>
  line.indexOf('<p>___') === 0 ?
    toCode(Prism.highlight(fs.readFileSync(line.slice(6, line.length - 4), {encoding: 'utf8'}), Prism.languages.jsx))
    : line

const resolveSources = html =>
  html.split('\n').map(s => resolveSource(s.trim())).join('\n')

const compileAndBind = markdown => {
  return resolveSources(marked(markdown))
}

module.exports = slides.map(
  name => ({
    name,
    html: compileAndBind(fs.readFileSync(`slides/${name}.md`, {encoding: 'utf8'}))
  })
)
