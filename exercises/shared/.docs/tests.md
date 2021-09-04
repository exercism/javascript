# Tests

## Setup

Go through the setup [instructions for JavaScript][docs-exercism-javascript] to install the necessary dependencies.

## Requirements

Install assignment dependencies:

```shell
# Using npm
npm install

# Alternatively using yarn
yarn
```

## Making the test suite pass

All exercises come with a test suite to help you validate your solution before submitting.
You can execute these tests by opening a command prompt in the exercise's directory, and then running:

```bash
# Using npm
npm test

# Alternatively using yarn
yarn test
```

In some test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to `test`.

## Writing custom tests

If you wish to write additional, custom, tests, create a new file `custom.spec.js`, and submit it with your solution together with the new file:

```shell
exercism submit numbers.js custom.spec.js
```

[docs-exercism-javascript]: https://exercism.org/docs/tracks/javascript/installation
