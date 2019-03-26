// @ts-check

const fs = require('fs')
const https = require('https')

const REPOSITORY_BASE_URL = 'https://github.com/exercism/problem-specifications/raw/master/exercises'

// eslint-disable-next-line no-unused-vars
function noop(_) {}

function fetch({ exercise, localPath, log = noop }) {
  if (localPath) {
    log(`=> reading spec from ${localPath}`)

    return new Promise((resolve, reject) => {
      fs.readFile(localPath, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(data.toString()))
        }
      })
    })
  }

  const url = [REPOSITORY_BASE_URL, exercise, 'canonical-data.json'].join('/')
  return get(url, log)
}

function get(url, log = noop, redirections = 10) {
  log(`=> fetch spec from ${url} (${redirections} redirections left)`)

  return new Promise((resolve, reject) => {
    const request = https.request(url)
    request.setHeader('Accept', 'application/json')
    request.setHeader('User-Agent', 'exercism/javascript 0.1.0')

    request.on('error', (err) => reject(err))
    request.on('response', (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers['location']) {
        return get(response.headers['location'], log, redirections - 1)
          .then(resolve)
          .catch(reject)
      }

      if (response.statusCode === 200) {
        let chunks = ''

        response.on("data", function (chunk) {
          chunks += chunk || ''
        })

        response.on("end", function (chunk) {
          chunks += chunk || ''
          resolve(JSON.parse(chunks.trim()))
        })

        return
      }

      return reject(new Error(`HTTPError ${response.statusCode}: ${response.statusMessage}`))
    })

    request.end(() => {})
  })
}

module.exports = { fetch }
