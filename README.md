# ECMAScript
[![Build Status](https://travis-ci.org/exercism/ecmascript.svg?branch=master)](https://travis-ci.org/exercism/ecmascript)
[![Join the chat at https://gitter.im/exercism/xecmascript](https://badges.gitter.im/exercism/xecmascript.svg)](https://gitter.im/exercism/xecmascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Exercism exercises in ECMAScript 6


## Running the Unit Test Suite

[Node.js](https://nodejs.org) must be installed. Follow [these instructions](http://exercism.io/languages/ecmascript/installing) for installing nodejs.
We recommend using the latest stable version (v7 at the moment).

Use `npm` to install all required dependencies:

    npm install

#### Linting Your Code
This project uses [eslint](https://github.com/eslint/eslint) to help you write quality
ECMAScript code by checking for common formatting errors, enforcing style rules,
and suggesting changes that conform to best practices.

    npm run lint-test

#### Test All Assignments
The make script will test all exercises:

    make test

#### Test Specific Assignment
Pass the exercise name to make script to run the tests for a specific exercise:

    make test-assignment ASSIGNMENT=hello-world


## Contributing Guide

For an in-depth discussion of how exercism language tracks and exercises work, please see the [contributing guide](https://github.com/exercism/x-api/blob/master/CONTRIBUTING.md#the-exercise-data)

