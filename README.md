# xECMAScript [![Build Status](https://travis-ci.org/exercism/xecmascript.svg?branch=master)](https://travis-ci.org/exercism/xecmascript)

Exercism exercises in ECMAScript 6

## Running the Unit Test Suite

[Node.js](https://nodejs.org) must be installed.  We recommend using the latest stable version.  Tests are run with
a [Gulp](http://gulpjs.com) task so the `gulp-cli` tool must be installed via `npm`

    % npm install -g gulp-cli

Then, `make` commands will install other dependencies as needed.

### Linting Your Code
This project uses [eslint](https://github.com/eslint/eslint) to help you write quality JavaScript code by checking for common formatting errors, enforcing style rules, and suggesting changes that conform to best practices.  

    % npm run lint-test
   

### All Assignments

    % make

### Single Assignment

    % make test-assignment ASSIGNMENT=palindrome-products

## Contributing Guide

Please see the [contributing guide](https://github.com/exercism/x-api/blob/master/CONTRIBUTING.md#the-exercise-data)

## License

The MIT License (MIT)

Copyright (c) 2014 Katrina Owen, _@kytrinyx.com

