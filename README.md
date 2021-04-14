# JavaScript

[![configlet](https://github.com/exercism/javascript/workflows/configlet/badge.svg)](https://github.com/exercism/javascript/actions?query=workflow%3Aconfiglet) [![javascript / master](https://github.com/exercism/javascript/workflows/javascript%20/%20main/badge.svg)](https://github.com/exercism/javascript/actions?query=workflow%3A%22javascript+%2F+main%22)

**Exercism exercises in JavaScript**

This is the JavaScript track, one of the many tracks on [Exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for students to complete.
The track consists of various **core** exercises - the ones a student _must_ complete - and each **core** exercise may unlock various _side_ exercises.
You can find this in the [`config.json`][file-config].

> In version 3 of Exercism, the above no longer holds. See the [`exercism/v3`][git-v3] repository for more information.

## Tools

See [CONTRIBUTING.md][file-contributing] for a list of requirements to contribute to this track.
It also has a list of tools you can use, of which the `test` tool is one of them.

## Running the code quality tooling (linter)

This run `eslint` for all files that *require* linting.

```shell
npx eslint exercises/**/*.spec.js exercises/**/.meta/*.js --fix
```

These are also the files that are linted using the lint script, mentioned in [CONTRIBUTING.md][file-contributing].
The lint rules imposed on contributors and maintainers are stricter than those for the student.
The idea is that we do **not** impose style rules on the students, but we guard for (potential) errors.

Files with strict rules:

- `<slug>.spec.js`
- `.meta/proof.ci.js`
- `.meta/exemplar.js`

Files with loose rules:

- `custom.spec.js`
- `<slug>.js`

## Running the test suite

This runs `jest` tests for all sample solutions.
This _does not_ use the regular way to run `jest`, because the example solution files must be renamed to be imported correctly into the test files.

```shell
npx babel-node scripts/test
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested.
For example, if you only want to test the `example.js` for the practice exercise `two-fer`, you may, depending on your environment, use:

```shell
ASSIGNMENT=practice/two-fer npx babel-node scripts/test
```

> Running on Windows? Depending on your shell, environment variables are set differently.
> You can use `cross-env` to normalize this. The following should work across environments:
>
> ```bash
> npx cross-env ASSIGNMENT=practice/two-fer babel-node scripts/test
> ```

## Related repositories

- [Website Copy][git-website-copy] (Mentor Notes)
- [The JavaScript Analyzer][git-javascript-analyzer] (Automated Code Analysis)
- [The JavaScript Representer][git-javascript-representer]
- [The JavaScript Test Runner][git-javascript-test-runner]
- [Static Analysis Shared Library][git-javascript-lib-static-analysis]

### Related TypeScript repositories

A lot of the improvements made to this track and tooling, is also made to the TypeScript track and tooling and vice-versa.

- [The TypeScript track][git-typescript]
- [The TypeScript Analyzer][git-typescript-analyzer]
- [The TypeScript Representer][git-typescript-representer]
- [The TypeScript Test Runner][git-typescript-test-runner]

[web-exercism]: https://exercism.io
[git-configlet]: https://github.com/exercism/docs/blob/master/language-tracks/configuration/configlet.md
[bin-fetch-configlet]: https://github.com/exercism/javascript/blob/master/bin/fetch-configlet
[file-config]: https://github.com/exercism/javascript/blob/master/config.json
[file-contributing]: https://github.com/exercism/javascript/blob/master/CONTRIBUTING.md
[git-javascript]: https://github.com/exercism/javascript
[git-javascript-analyzer]: https://github.com/exercism/javascript-analyzer
[git-javascript-representer]: https://github.com/exercism/javascript-representer
[git-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[git-javascript-lib-static-analysis]: https://github.com/exercism/javascript-lib-static-analysis
[git-typescript]: https://github.com/exercism/typescript/
[git-typescript-analyzer]: https://github.com/exercism/typescript-analyzer
[git-typescript-representer]: https://github.com/exercism/typescript-representer
[git-typescript-test-runner]: https://github.com/exercism/typescript-test-runner
[git-v3]: https://github.com/exercism/v3
[git-website-copy]: https://github.com/exercism/website-copy
