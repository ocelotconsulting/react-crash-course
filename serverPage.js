const React = require('react')
const ReactDOMServer = require('react-dom/server')

class Example extends React.Component {
  render () {
    return React.createElement('h1', {}, ['hello, world'])
  }
}

module.exports = (req, res) => {
  const componentHtml = ReactDOMServer.renderToStaticMarkup(React.createElement(Example))

  res.send(`
      <html>
      <head>
        <title>Server Side Rendering Example</title>
      </head>
      <body>
      ${componentHtml}
      </body>
      </html>          
  `)
}
