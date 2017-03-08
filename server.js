const fs = require('fs')
const express = require('express')
const app = express()
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')

app.use('/api', require('./api'))

app.get('/server-page', require('./serverPage'))

app.use('/images', express.static('images'))

const compiler = webpack(require('./webpack.config'))

app.use(devMiddleware(compiler, {
  stats: {
    colors: true
  },
  noInfo: true
}))

app.use(hotMiddleware(compiler, {path: '/__webpack_hmr'}))

const html = fs.readFileSync('index.html', {encoding: 'utf8'})

app.get('/', (req, res) => res.redirect('/1'))

app.get('/:slideNumber', (req, res) => res.send(html))

const port = parseInt(process.env.PORT, 10) || 3006

// error handler
// noinspection JSUnusedLocalSymbols
app.use('/', (error, req, res, next) => {
  if (error) {
    error.stack && console.error(error.stack)
    res.status(500).json(error)
  } else {
    next()
  }
})

app.listen(port, () => console.log(`running: http://localhost:${port}`))
