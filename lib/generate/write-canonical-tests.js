// @ts-check

const fs = require('fs');
const path = require('path');

const ROOT_PATH = path.join(__dirname, '..', '..');
const EXERCISES_PATH = path.join(ROOT_PATH, 'exercises');

// eslint-disable-next-line no-unused-vars
function noop(_) {}

/**
 * @typedef {{ [K:string]: true }} Exports
 * @typedef {{ [k: string]: string | GeneratedTestCases }} GeneratedTestCases
 * @typedef {(message: string) => void} log
 */

/**
 *
 * @param {{ cases: GeneratedTestCases, exports: Exports, exercise: string, log: log }} options
 */
async function write({ cases, exports, exercise }) {
  return new Promise((resolve, reject) => fs.mkdir(path.join(EXERCISES_PATH, exercise), (err) => {
    if (err && err.code !== 'EEXIST') {
      return reject(err)
    }

    const fileContents = generateFile({ cases, exports, exercise })
    fs.writeFile(path.join(EXERCISES_PATH, exercise, `${exercise}.spec.js`), fileContents, (err) => {
      if (err) {
        return reject(err)
      }

      return resolve(fileContents)
    })
  }))
}

function generateFile({ cases, exports, exercise }) {
  return [
    `import { ${Object.keys(exports).filter(key => exports[key]).sort().join(', ') } } from './${exercise}.js'`,
    '',
    generateDescribes(cases).replace(/xtest/, 'test')
  ].join('\n')
}

function indent(count, string) {
  while (count > 0) {
    return indent(count - 1, "  " + string)
  }
  return string
}

function generateDescribes(cases, indentation = 0) {
  // TODO: instead of logic to indent, probably want to run prettier and be done
  return Object.keys(cases).reduce((result, key) => {
    const value = cases[key]
    if (typeof value === 'string') {
      result.push(value.split("\n").map(line => indent(indentation, line)).join("\n"))
    } else {
      result.push(indent(indentation, `describe('${key}', () => {`))
      result.push(
        generateDescribes(value, indentation + 1).trimRight()
      )
      result.push(indent(indentation, '})'))
    }
    result.push('')
    return result
  }, []).join("\n")
}

module.exports = { write }
