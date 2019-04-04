// @ts-check

const { get, noop } = require('./get')

const jsdom = require("jsdom");
const { JSDOM } = jsdom

// TODO: consider using the API
// TODO: consider using a local copy (via git pull)

const REPOSITORY_BASE_URL = 'https://github.com/exercism/problem-specifications/tree/master/exercises'

/**
 *
 * @param {{ log: typeof noop }} options
 * @returns {Promise<string[]>}
 */
async function fetch({ log = noop }) {
  const document = await get(REPOSITORY_BASE_URL, { accept: 'text/html', log }).then(result => new JSDOM(result.trim()).window.document)

  /** @type {NodeListOf<HTMLElement>} */
  const [...icons] = document.querySelectorAll('table.files [aria-label="directory"]')

  /** @type {string[]} */
  return icons.map((icon) => icon.closest('tr').querySelector('a').textContent)
}


module.exports = { fetch }
