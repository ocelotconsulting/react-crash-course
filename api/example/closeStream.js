module.exports = stream =>
  new Promise((resolve, reject) => {
    stream.on('error', reject)
    stream.end(resolve)
  })