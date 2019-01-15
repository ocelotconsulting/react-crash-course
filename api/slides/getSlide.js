const documents = require('./documents')

module.exports = ({ params: { slideNumber } }, res) => {
  const document = documents[parseInt(slideNumber) - 1]

  if (document) {
    res.json({
      name: document.name,
      html: document.html()
    })
  } else {
    res.status(404).send(`no such slide: ${slideNumber}`)
  }
}
