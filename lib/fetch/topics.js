// @ts-check

const { get, noop } = require('./get')
const fs = require('fs')
const path = require('path')

// TODO: consider using the API
// TODO: consider using a local copy (via git pull)

const REPOSITORY_BASE_URL = 'https://github.com/exercism/problem-specifications/raw/master'

/**
 *
 * @param {{ localPath?: string, log: typeof noop }} options
 * @returns {Promise<string[]>}
 */
async function fetch({ localPath, log = noop }) {
  if (localPath) {
    const localTopicsPath = path.join(localPath, 'TOPICS.txt')
    log(`=> reading topics from ${localTopicsPath}`)

    return new Promise((resolve, reject) => {
      fs.readFile(localTopicsPath, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(parse(data.toString()))
        }
      })
    })
  }

  const url = [REPOSITORY_BASE_URL, 'TOPICS.txt'].join('/')
  return get(url, { log, accept: 'text/plain' })
    .then(result => parse(result.trim()))
}

/**
 *
 * @param {string} data
 * @returns {string[]}
 */
function parse(data) {
  // Remove headers (Capital Name), separators (-----) and blanks ()
  return data.split("\n").filter((line) => /^[a-z]/.test(line)).map((line) => line.trim())
}

module.exports = { fetch }
