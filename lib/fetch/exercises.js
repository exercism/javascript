// @ts-check

const { get, noop } = require('./get')

const fs = require('fs')
const path = require('path')

let jsdom = undefined

/**
 *
 * @param {string} dom
 * @returns {import('jsdom').JSDOM}
 */
function createDom(dom) {
  if (!jsdom) {
    jsdom = require('jsdom')
  }

  const { JSDOM } = jsdom
  return new JSDOM(dom)
}

// TODO: consider using the API
const REPOSITORY_BASE_URL = 'https://github.com/exercism/problem-specifications/tree/master/exercises'

/**
 *
 * @param {{ localPath?: string, log: typeof noop }} options
 * @returns {Promise<string[]>}
 */
async function fetch({ localPath, log = noop }) {
  if (localPath) {
    const localExercisesPath = path.join(localPath, 'exercises')
    log(`=> reading exercises from ${localExercisesPath}`)

    return new Promise((resolve, reject) => {
      fs.readdir(localExercisesPath, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data.map(dir => dir.trim()))
        }
      })
    })
  }

  const document = await get(REPOSITORY_BASE_URL, { accept: 'text/html', log }).then(result => createDom(result.trim()).window.document)

  /** @type {NodeListOf<HTMLElement>} */
  const [...icons] = document.querySelectorAll('table.files [aria-label="directory"]')

  /** @type {string[]} */
  return icons.map((icon) => icon.closest('tr').querySelector('a').textContent)
}


module.exports = { fetch }
