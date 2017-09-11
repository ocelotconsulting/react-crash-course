const readFile = require('./readFile')

// we assume that the command is 'node run fileName'
const fileName = process.argv[2]

if (!fileName) {
  console.error('missing file name')
  process.exit(0)
}

const acceptLine = line => console.log(line)

readFile(fileName, acceptLine)
.then(() => {
  console.log('all done')
  process.exit(0)
})
.catch(error => {
  console.error(error)
  process.exit(1)
})
