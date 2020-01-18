# CLI

## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation][docs-exercism-javascript]

## Requirements

Install assignment dependencies:

```shell
# Using yarn
yarn

# Alternatively using npm
npm install
```

## Making the test suite pass

Execute the tests with:

```bash
# Using yarn
yarn test

# Alternatively using npm
npm test
```

In the test suites all tests but the first have been skipped. This is to
encourage you to solve the exercise one step at a time.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.

## Submitting the solution

Once none of the tests are skipped and they are all passing, you can submit
your solution using `exercism submit numbers.js`.

## Writing custom tests

If you wish to write additional, custom, tests, create a new file
`custom.spec.js`, and submit it with your solution together with the new file:

```shell
exercism submit number.js custom.spec.js
```

## Links

- [exercism CLI documentation][docs-exercism-cli]

[docs-exercism-cli]: https://exercism.io/cli
[docs-exercism-javascript]: https://exercism.io/tracks/javascript/installation
