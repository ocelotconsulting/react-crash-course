const fs = require('fs')
const readline = require('readline')

module.exports = (fileName, acceptLine) => {
  const input = fs.createReadStream(fileName)
  const lineReader = readline.createInterface({input})

  lineReader.on('line', acceptLine)

  return new Promise((resolve, reject) => {
    input.on('end', resolve)
    input.on('error', reject)
  })
}


