# JavaScript
[![Build Status](https://travis-ci.org/exercism/javascript.svg?branch=master)](https://travis-ci.org/exercism/javascript)

Exercism exercises in JavaScript

This is the JavaScript track, one of the many tracks on [exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for 
students to complete. The track consists of various **core** exercises, the ones 
a student _must_ complete, and each **core** exercise may unlock various _side_ 
exercises. You can find this in the [`config.json`][file-config]. 

## Tools

See [CONTRIBUTING.md][file-contributing] for a list of requirements to
contribute to this track. It also has a list of tools you can use, of which the
`test` tool is one of them.

## Running the test suite

This runs `jest` tests for all sample solutions

```shell
npx @babel/node scripts/test
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For
example, if you only want to test the `example.js` for `two-fer`, you may, depending 
on your environment, use:

```shell
ASSIGNMENT=two-fer npx @babel/node scripts/test
```

[file-contributing]: https://github.com/exercism/javascript/blob/master/CONTRIBUTING.md
[web-exercism]: https://exercism.io
[git-configlet]: https://github.com/exercism/docs/blob/master/language-tracks/configuration/configlet.md
[bin-fetch-configlet]: https://github.com/exercism/javascript/blob/master/bin/fetch-configlet
[file-config]: https://github.com/exercism/javascript/blob/master/config.json
