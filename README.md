# JavaScript
[![Build Status](https://travis-ci.org/exercism/javascript.svg?branch=master)](https://travis-ci.org/exercism/javascript)

Exercism exercises in JavaScript

This is the JavaScript track, one of the many tracks on [exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for 
students to complete. The track consists of various **core** exercises, the ones 
a student _must_ complete, and each **core** exercise may unlock various _side_ 
exercises. You can find this in the [`config.json`][file-config]. 

## Running the test suite

Follow the instructions below for the `test` tool.

## Tools

You'll need LTS or higher NodeJS in order to contribute to the _code_ in this
respository. Run `npm install` in the root in order to be able to run the 
scripts as listed below. We use the following dependencies:

- `shelljs` in order to provide shell interface to scripts
- `eslint` for linting all code in the stub, test file and example file
- `jest` to run all the test files on all example implementations
- `babel` to transpile everything so it works _on your version of NodeJS_.

### Fetch configlet

If you'd like to download [configlet][git-configlet], you can use the 
[`fetch-configlet`][bin-fetch-configlet] binary. It will run on Linux, Mac OSX 
and Windows, and download `configlet` to your local drive. Find more information 
about [configlet][git-configlet] [here][git-configlet].

### Scripts

We have various `scripts` for you in order to aid with maintaining and 
contributing to this repository.

#### `lint`

```js
/*
 * Run this script (from root directory): npx @babel/node scripts/lint
 *
 * This runs `eslint` on all sample solutions (and test) files
 */
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For
example, if you only want to lint `two-fer`, you may, depending on your environment
use:

```shell
ASSIGNMENT=two-fer npx @babel/node scripts/lint
```

#### `test`

```js
/**
 * Run this script (from root directory): npx @babel/node scripts/test
 *
 * This runs `jest` tests for all sample solutions
 */
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For
example, if you only want to test the `example.js` for `two-fer`, you may, depending 
on your environment, use:

```shell
ASSIGNMENT=two-fer npx @babel/node scripts/test
```

#### `sync`

```js
/**
 * Run this script (from root directory): npx @babel/node scripts/sync
 *
 * This script is used to propagate any change to root package.json to
 * all exercises and keep them in sync.
 * There is a CI step which checks that package.json in root & exercises match
 * (see checksum script for more info).
 */
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For
example, if you only want to sync the files for `two-fer`, you may, depending on 
your environment, use:

```shell
ASSIGNMENT=two-fer npx @babel/node scripts/sync
```

#### `checksum`

```js
/*
 * Run this script (from root directory): npx @babel/node scripts/checksum
 *
 * This will check root `package.json` matches each exercise's `package.json`.
 * But the catch is there are some dependencies used for build but not served to end users
 * We skip those dependencies while performing checksum.
 * See `SKIP_PACKAGES_FOR_CHECKSUM` in helpers.js for list of skipped packages.
 */
```

#### `ci`

```js
/**
 * Run this script (from root directory): npx @babel/node scripts/ci
 *
 * This will run following checks:
 * 1. Check config in all exercises matches
 * 2. Run eslint to check code-style
 * 3. Run tests against sample solutions
 */
```


## Contributing

For an in-depth discussion of how exercism language tracks and exercises work, 
please see [CONTRIBUTING.md][file-contributing].

[file-contributing]: https://github.com/exercism/javascript/blob/master/CONTRIBUTING.md
[web-exercism]: https://exercism.io
[git-configlet]: https://github.com/exercism/docs/blob/master/language-tracks/configuration/configlet.md
[bin-fetch-configlet]: https://github.com/exercism/javascript/blob/master/bin/fetch-configlet
[file-config]: https://github.com/exercism/javascript/blob/master/config.json