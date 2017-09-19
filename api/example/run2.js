const fs = require('fs')
const {EOL} = require('os') // \n for *nix, \r\n for windows
const readFile = require('./readFile')
const closeStream = require('./closeStream')

// we assume that the command is 'node run2 source target'
const source = process.argv[2]
const target = process.argv[3]

const fail = message => {
  console.error(message)
  process.exit(1)
}

// check the command-line args
if (!source || !target) fail('expected source and target files')

// fail fast if the source file does not exist
// you could also put in a check to make sure the target does not exist
if (!fs.existsSync(source)) fail(`file not found: ${source}`)

const parseRgb = input => {
  const [r, g, b] = input.split(' ').map(Number)
  return b * 65536 + g * 256 + r
}

const processLine = line => {
  if (line.substr(7, 17) === 'statements.Colors') {
    return line + parseRgb(line.substr(33, 15))
  } else {
    return line
  }
}

// a function which simply copies a text file, line by line
// uses the platform EOL (CRLF on windows)
const run = async () => {
  try {
    let lineCount = 0

    const targetStream = fs.createWriteStream(target)

    const acceptLine = line => {
      targetStream.write(processLine(line) + EOL)
      lineCount++
    }

    await readFile(source, acceptLine)
    await closeStream(targetStream)

    console.log(`wrote ${lineCount} lines to ${target}`)
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

// actually run the code - it terminates asynchronously
run()
// WARNING - anything you put here will run before the file is done
