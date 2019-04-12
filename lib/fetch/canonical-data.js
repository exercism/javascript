// @ts-check

const { get, noop } = require('./get')
const fs = require('fs')
const path = require('path')

// TODO: consider using the API
const REPOSITORY_BASE_URL = 'https://github.com/exercism/problem-specifications/raw/master/exercises'

/**
 *
 * @param {{ exercise: string, localPath?: string, log: typeof noop }} options
 * @returns {Promise<object>}
 */
async function fetch({ exercise, localPath, log = noop }) {
  if (localPath) {
    const localExcercisePath = path.join(localPath, exercise, 'canonical-data.json')
    log(`=> reading spec from ${localExcercisePath}`)

    return new Promise((resolve, reject) => {
      fs.readFile(localExcercisePath, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(data.toString()))
        }
      })
    })
  }

  const url = [REPOSITORY_BASE_URL, exercise, 'canonical-data.json'].join('/')
  return get(url, { log, accept: 'application/json' }).then(result => JSON.parse(result.trim()))
}


module.exports = { fetch }
