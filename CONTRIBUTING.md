# Contributing

This is the JavaScript track, one of the many tracks on [exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for students
to complete. The track consists of various **core** exercises, the ones a student _must_
complete, and each **core** exercise may unlock various _side_ exercises. You can find
this in the [`config.json`][file-config]. It's not uncommon that people discover 
incorrect implementations of certain tests, have a suggestion for a track specific hint
to aid the student on the _JavaScript specifics_, see optimisations in terms of the
configurations of `jest`, `eslint` or other dependencies, report missing edge cases, 
factual errors, logical errors, and, implement exercises or develop new exercises.

We welcome contributions of all sorts and sizes, from reporting issues to
submitting patches, as well as joining the current [discussions 💬][issue-discussion].

-----

This guide covers several common scenarios pertaining to **improving the
JavaScript track**. There are several other guides about contributing to
other parts of the Exercism ecosystem, that are similar to this repository.

* [Generic information about track-contributing][contributing-generic]
* [The TypeScript track][contributing-typescript]
* [The JavaScript Analyzer][contributing-javascript-analyzer]
* [The TypeScript Analyzer][contributing-typescript-analyzer]
* [The JavaScript Test Runner][contributing-javascript-test-runner]

## Code of Conduct

Help us keep Exercism welcoming. Please read and abide by the [Code of Conduct][coc].

## Exercises

Before contributing code to any existing exercise or any new exercise, please
have a thorough look at the current exercises and dive into [open issues][issue-open].

### New exercise

There are two ways to implement new exercises.

1. Pick one from [the list of exercises][list-of-exercises]
2. Create a new, track-specific exercise from scratch.

#### Implementing existing exercise

Let's say you want to implement a new exercise, from the list of exercises, because
you've noticed that this track could benefit from this exercise, really liked it in
another track, or just because you find this interesting; the first step is to 
[check for an open issue][issue-new-exercise]. If it's there, make sure no one is 
working on it, and most of all that there is not an open Pull Request towards this 
exercise.

If there is no such issue, you may open one. The baseline of work is as follows:

1. Open a new issue, we'll label it with `new exercise ✨`
1. We'll assign the issue to you, so you get to work on this exercise
1. Create a new folder in `/exercises`
1. You'll need to sync this folder with the matching config files. You can use 
`scripts/sync` to do this: `ASSIGNMENT=slug npx @babel/node scripts/sync`.
1. Create a `<slug>.js` stub file.
1. Create a `<slug>.spec.js` test file. Here add the tests, per canonical data if 
possible.
1. Create a `example.js` file. Place a working implementation, assuming it's renamed 
to `<slug>.js`
1. Run the tests locally, using `scripts/test`: 
`ASSIGNMENT=slug npx @babel/node scripts/test`.

The final step is opening a Pull Request, with these items all checked off. Make 
sure the tests run and the linter is happy. It will run automatically on your PR.

#### Creating a track-specific exercise

The steps for a track-specific exercise are similar to those of implementing an
established, existing exercise. The differences are:

- You'll have to write a README.md and test-suite from scratch
- You'll have to come up with a unique _slug_.
- We need to require an icon for it. 
- Generate a UUID, for example using [configlet][configlet].

Open a new issue with your proposal, and we'll make sure all these steps are 
correctly taken. Don't worry! You're not alone in this.

### Existing exercises

There are always improvements possible on existing exercises. 

#### Improving the README.md

`README.md`: the description that shows up on the student's exercise page, when
they are ready to start. It's also downloaded as part of the exercise's data. The
`README.md`, together with the `<slug>.spec.js` file form the contract for the
implementation of the exercise. No test should _force_ a specific implementation,
no `README.md` explanation should _give away_ a certain implementation. The
`README.md` files are [generated][doc-readme], which is explains [here][doc-readme].

  - This file may need to be _regenerated_ in order to sync with the latest
    canonical data.
  - You may contribute track specific `hints.md`, as listed in that [document][doc-readme]
  - You may improve the track specific `exercise-readme-insert.md`, and regenerate
    all the readmes.

#### Syncing the exercise

Syncing an exercise with _canonical data_: There is a [problem-specifications][problem-specifications]
repository that holds test data in a standardised format. These tests are 
occasionally fixed, improved, added, removed or otherwise changed. Each change also
changes the _version_ of that canonical data. Syncing an exercise consists of:

  - updating or adding the `"version"` key in the `package.json` file, 
  - updating the `<slug>.spec.js` file,
  - match the `example.js` file to still work with the new tests, and 
  - regenerate the `README.md`, should there be any changes.

#### Improving or adding mentor notes

[Mentor notes][mentor-notes] are the notes that are given to the mentors to guide
them with mentoring. These notes _do not live in this repository_, but instead in
the `website-copy` repository. Find their [contributing guidelines][contributing-website-copy] [here][contributing-website-copy].

#### Improving or adding automated test analyzers

Some exercises already have automated mentoring support. These automations
don't live in this repository, but instead in the `javascript-analyzer` repository. 
Find their [contributing guidelines][contributing-javascript-analyzer] [here][contributing-javascript-analyzer].

## Documentation

There is quite a bit of student-facing documentation, which can be found in the 
[`docs`][file-docs] folder. You may improve these files by making the required 
changes and opening a new Pull Request.

## Tools

You'll need LTS or higher NodeJS in order to contribute to the _code_ in this
respository. Run `npm install` in the root in order to be able to run the scripts
as listed below. We use the following dependencies:

- `shelljs` in order to provide shell interface to scripts
- `eslint` for linting all code in the stub, test file and example file
- `jest` to run all the test files on all example implementations
- `babel` to transpile everything so it works _regardless of your version of NodeJS_.

### Fetch configlet

If you'd like to download [configlet][configlet], you can use the [`fetch-configlet`][bin-fetch-configlet]
binary. It will run on Linux, Mac OSX and Windows, and download `configlet` to your 
local drive. Find more information about [configlet][configlet] [here][configlet].

### Scripts

We have various `scripts` for you in order to aid with maintaining and contributing 
to this repository.

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

[configlet]: https://github.com/exercism/docs/blob/master/language-tracks/configuration/configlet.md
[bin-fetch-configlet]: https://github.com/exercism/javascript/blob/master/bin/fetch-configlet
[web-exercism]: https://exercism.io
[file-config]: https://github.com/exercism/javascript/blob/master/config.json
[file-docs]: https://github.com/exercism/javascript/blob/master/docs
[issue-open]: https://github.com/exercism/javascript/issues
[issue-discussion]: https://github.com/exercism/javascript/labels/discussion%20%3Aspeech_balloon%3A
[issue-new-exercise]: https://github.com/exercism/javascript/issues?q=is%3Aopen+is%3Aissue+label%3A%22%3Asparkles%3A+new+exercise%22
[list-of-exercises]: https://github.com/exercism/javascript/issues/660
[contributing-generic]: https://github.com/exercism/docs/tree/master/contributing-to-language-tracks
[contributing-javascript]: https://github.com/exercism/javascript/blob/master/CONTRIBUTING.md
[contributing-javascript-analyzer]: https://github.com/exercism/javascript-analyzer/blob/master/CONTRIBUTING.md
[contributing-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[contributing-typescript]: https://github.com/exercism/typescript/
[contributing-typescript-analyzer]: https://github.com/exercism/typescript-analyzer/blob/master/CONTRIBUTING.md
[contributing-website-copy]: https://github.com/exercism/website-copy#contributing
[doc-readme]: https://github.com/exercism/docs/blob/master/language-tracks/exercises/anatomy/readmes.md
[problem-specifications]: https://github.com/exercism/problem-specifications
[coc]: https://exercism.io/code-of-conduct
[mentor-notes]: https://github.com/exercism/website-copy/tree/master/tracks/javascript/exercises
