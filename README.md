# Exercism JavaScript Track

[![Configlet](https://github.com/exercism/javascript/actions/workflows/configlet.yml/badge.svg)](https://github.com/exercism/javascript/actions/workflows/configlet.yml) [![javascript / main](https://github.com/exercism/javascript/workflows/javascript%20/%20main/badge.svg)](https://github.com/exercism/javascript/actions?query=workflow%3A%22javascript+%2F+main%22)

> [!IMPORTANT]
> We 💙 our community but **this repository does not accept community contributions at this time**.<br>
> There are no active maintainers to review PRs.<br>
> Please read this [community blog post][freeing-maintainers] for details.

**Exercism exercises in JavaScript**

This is the JavaScript track, one of the many tracks on [Exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for students to complete.
The track consists of various **concept** exercises that teach the [JavaScript syllabus][web-syllabus], and various practice exercises, which are unlocked by progressing in the syllabus and can be used to practice concepts learned.
You can find this in the [`config.json`][file-config].

## Tools

See [CONTRIBUTING.md][file-contributing] for a list of requirements to contribute to this track.
It also has a list of tools you can use, of which the `test` tool is one of them.

## Running the code quality tooling (linter)

This run `eslint` for all files that _require_ linting.

```shell
corepack pnpm node scripts/lint.mjs --fix
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
corepack pnpm node scripts/test.mjs
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested.
For example, if you only want to test the `example.js` for the practice exercise `two-fer`, you may, depending on your environment, use:

```shell
ASSIGNMENT=practice/two-fer corepack pnpm node scripts/test.mjs
```

> Running on Windows? Depending on your shell, environment variables are set differently.
> You can use `cross-env` to normalize this. The following should work across environments:
>
> ```bash
> # if installed globally
> cross-env ASSIGNMENT=practice/two-fer corepack pnpm node scripts/test.mjs
>
> # otherwise
> corepack pnpm dlx cross-env ASSIGNMENT=practice/two-fer node scripts/test.mjs
> ```

## Related repositories

- [Website Copy][git-website-copy] (Mentor Notes)
- [The JavaScript Analyzer][git-javascript-analyzer] (Automated Code Analysis)
- [The JavaScript Representer][git-javascript-representer]
- [The JavaScript Test Runner][git-javascript-test-runner]
- [Static Analysis Shared Library][git-javascript-lib-static-analysis]

### Related TypeScript repositories

A lot of the improvements made to this track and tooling are also made to the TypeScript track and tooling and vice-versa.

- [The TypeScript track][git-typescript]
- [The TypeScript Analyzer][git-typescript-analyzer]
- [The TypeScript Representer][git-typescript-representer]
- [The TypeScript Test Runner][git-typescript-test-runner]

[web-exercism]: https://exercism.org
[web-syllabus]: https://exercism.org/tracks/javascript/concepts
[git-configlet]: https://exercism.org/docs/building/configlet
[bin-fetch-configlet]: https://github.com/exercism/javascript/blob/main/bin/fetch-configlet
[file-config]: https://github.com/exercism/javascript/blob/main/config.json
[file-contributing]: https://github.com/exercism/javascript/blob/main/CONTRIBUTING.md
[git-javascript]: https://github.com/exercism/javascript
[git-javascript-analyzer]: https://github.com/exercism/javascript-analyzer
[git-javascript-representer]: https://github.com/exercism/javascript-representer
[git-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[git-javascript-lib-static-analysis]: https://github.com/exercism/javascript-lib-static-analysis
[git-typescript]: https://github.com/exercism/typescript/
[git-typescript-analyzer]: https://github.com/exercism/typescript-analyzer
[git-typescript-representer]: https://github.com/exercism/typescript-representer
[git-typescript-test-runner]: https://github.com/exercism/typescript-test-runner
[git-website-copy]: https://github.com/exercism/website-copy
[freeing-maintainers]: https://exercism.org/blog/freeing-our-maintainers
