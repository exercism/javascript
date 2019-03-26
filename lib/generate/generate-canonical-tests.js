// @ts-check

// eslint-disable-next-line no-unused-vars
function noop(_) {}

/**
 * @typedef {{ exercise: string, version: string, cases: (CanonicalCase | CanonicalCases)[] }} canonicalData
 * @typedef {{ description: string, cases: (CanonicalCase | CanonicalCases)[] }} CanonicalCases
 * @typedef {{ description: string, property: string, input: { [k: string]: PropertyValue }, expected: PropertyValue }} CanonicalCase
 * @typedef {(message: string) => void} log
 * @typedef {ExportOptions & { exports: { [K:string]: true } }} Exported
 * @typedef {{ as: 'functions' | 'class', class: string }} ExportOptions
 * @typedef {string | number | (string | number)[] | object} PropertyValue
 * @typedef {{ [k: string]: string | GeneratedTestCases }} GeneratedTestCases
 */

/**
 *
 * @param {{ canonicalData: any, log: log, exportAs: 'functions' | 'class' }} options
 * @returns {{ cases: GeneratedTestCases, exports: Exported['exports'] }}
 */
function generate({ canonicalData, log = noop, exportAs = 'functions' }) {
  const exported = {
    as: exportAs,
    class: exportAsClassName(canonicalData.exercise),
    exports: {}
  }

  const cases = generateCases({
    canonicalData,
    exported,
    log: (message) => log(message.replace(/\{path\}/, canonicalData.exercise)),
    output: {} })

  return { cases: { [exported.class]: cases }, exports: exported.exports }
}

/**
 *
 * @param {string} exercise
 * @return {string}
 */
function exportAsClassName(exercise) {
  return exercise
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('')
}

/**
 *
 * @param {string} className
 * @return {string}
 */
function instanceName(className) {
  return className[0].toLowerCase() + className.slice(1)
}

/**
 *
 * @param {{ canonicalData: CanonicalCases, log: log, exported: Exported, output: GeneratedTestCases }} options
 */
function generateCases({ canonicalData, exported, output, log = noop }) {
  const { cases } = canonicalData
  const length = cases.length
  log(`=> generating ${length} cases for {path}`)

  for (let i = 0; i < length; i++) {
    const current = cases[i]

    /** @type {log} */
    const nextLog = (message) => log(message.replace(/\{path\}/, `{path} -> ${current.description}`))

    if (/** @type {CanonicalCases} */(current).cases) {
      output[current.description] = generateCases({
        exported,
        log: nextLog,
        canonicalData: (/** @type {CanonicalCases} */(current)),
        output: {}
      })
    } else {
      output[current.description] = generateJestTest({
        ...(/** @type {CanonicalCase} */(current)),
        log,
        exported
      })
    }
  }

  return output
}

/**
 * Creates a function that, when called, returns the correct way to access the
 * property with the called argument (input).
 *
 * @example when exporting as functions
 *
 *   propertyToAccessor({ as: 'functions', exports: {} }, 'foo')
 *   // => (input) => `foo(${input})`
 *
 * @example when exporting as class
 *
 *   propertyToAccessor({ as: 'class', exports: {}, class: 'BarKlazz' }, 'foo')
 *   // => (input) => `barKlazz.foo(${input})`
 *
 * @param {Exported} exported
 * @param {string} property
 * @returns {(input: string) => string}
 */
function propertyToAccessor(exported, property) {
  switch(exported.as) {
    case 'functions':
      exported.exports[property] = true
      return (input) => `${property}(${input})`

    case 'class':
      exported.exports[instanceName(exported['class'])] = true
      return (input) => `${instanceName(exported['class'])}.${property}(${input})`

    default:
      throw new Error(`Unexpected exported.as: ${exported.as}`)
  }
}

/**
 * Turns an input map to input parameters to be used with the result of
 * propertyToAccessor.
 *
 * @see propertyToAccessor
 * @param {{ [k: string]: PropertyValue }} input
 * @returns {string}
 */
function inputToAccessorParameter(input) {
  return Object.keys(input).reduce((result, key) => {
    const values = input[key]
    result.push(JSON.stringify(values))
    return result
  }, []).join(', ')
}

/**
 * Turns an expected value into a jest chaining call
 * @param {PropertyValue} expected
 */
function expectedToJestAssertion(expected) {
  return `toEqual(${JSON.stringify(expected)})`
}

/**
 * Generate a jest test (without describe)
 * @param {{ description: string, property: string, input: PropertyValue, expected: PropertyValue, exported: Exported, log: log }} options
 */
function generateJestTest({ description, property, input, expected, exported, log }) {
  const access = propertyToAccessor(exported, property)
  log(`=> test {path} -> ${description}`)

  return `
xtest('${description}', () => {
  expect(${access(inputToAccessorParameter(input))}).${expectedToJestAssertion(expected)}
})
`.trim()
}

module.exports = { generate }
