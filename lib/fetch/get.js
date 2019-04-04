
const https = require('https')

/**
 *
 * @param {any} _
 */
// eslint-disable-next-line no-unused-vars
function noop(_) {}

/**
 *
 * @param {string} url
 * @param {{ log?: (message: string) => void, redirections?: number, accept?: string }} options
 * @returns {Promise<string>}
 */
function get(url, { accept = 'text/html', log = noop, redirections = 10 }) {
  log(`=> fetch ${url} as ${accept} (${redirections} redirections left)`)

  return new Promise((resolve, reject) => {
    const request = https.request(url)
    request.setHeader('Accept', accept)
    request.setHeader('User-Agent', 'exercism/javascript 0.1.0')

    request.on('error', (err) => reject(err))
    request.on('response', (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers['location']) {
        return get(response.headers['location'], { accept, log, redirections: redirections - 1 })
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
          resolve(chunks)
        })

        return
      }

      return reject(new Error(`HTTPError ${response.statusCode}: ${response.statusMessage}`))
    })

    request.end(() => {})
  })
}

module.exports = { noop, get }
