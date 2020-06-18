# Dominoes

Make a chain of dominoes.

Compute a way to order a given set of dominoes in such a way that they form a
correct domino chain (the dots on one half of a stone match the dots on the
neighbouring half of an adjacent stone) and that dots on the halves of the
stones which don't have a neighbour (the first and last stone) match each other.

For example given the stones `[2|1]`, `[2|3]` and `[1|3]` you should compute something
like `[1|2] [2|3] [3|1]` or `[3|2] [2|1] [1|3]` or `[1|3] [3|2] [2|1]` etc, where the first and last numbers are the same.

For stones `[1|2]`, `[4|1]` and `[2|3]` the resulting chain is not valid: `[4|1] [1|2] [2|3]`'s first and last numbers are not the same. 4 != 3

Some test cases may use duplicate stones in a chain solution, assume that multiple Domino sets are being used.

## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Please `cd` into exercise directory before running all below commands.

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.


## Submitting Solutions

Once you have a solution ready, you can submit it using:

```bash
exercism submit dominoes.js
```

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.

