# exercise readme insert

## Setup

Go through the setup instructions for JavaScript to install the necessary
dependencies:

[https://exercism.org/docs/tracks/javascript/installation](https://exercism.org/docs/tracks/javascript/installation)

## Requirements

Please `cd` into exercise directory before running all below commands.

Install assignment dependencies:

```bash
$ corepack pnpm install
```

If `corepack` complains about not being enabled, you can do so by running:

```bash
corepack enable pnpm
```

## Making the test suite pass

Execute the tests with:

```bash
$ corepack pnpm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.
