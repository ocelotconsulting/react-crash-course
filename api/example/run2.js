const readFile = require('./readFile')

// we assume that the command is 'node run2 fileName'
const fileName = process.argv[2]

if (!fileName) {
  console.error('missing file name')
  process.exit(0)
}

// any variables we want to keep around for the whole time we're reading the file
// are declared here
let lineCount = 0
let totalLength = 0

const acceptLine = line => {
  lineCount++
  totalLength += line.length
}

readFile(fileName, acceptLine)
.then(() => {
  console.log(`there were a total of ${lineCount} lines`)
  console.log(`the average line length was ${totalLength / lineCount} characters`)
  process.exit(0)
})
.catch(error => {
  console.error(error)
  process.exit(1)
})

