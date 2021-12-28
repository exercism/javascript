# Tests

Execute the tests with:

```bash
$ npm run test
```

Be sure your code follows best practices and coding styles, as other users do, with ESLint, a tool to perform static analysis on your code.
Sometimes, tools like this save you some time detecting typos or silly mistakes in your JavaScript code:

```bash
$ npm run lint
```

You can also run Jest in "watch" mode, which will re-run your tests automatically when you save changes to the code or test module:

```bash
$ npm run watch
```

## Understanding Skip Tests

The skip method instructs the test suite to not run a test, this function could be used also under the aliases: `it.skip(name, fn)` or `xit(name, fn)` or `xtest(name, fn)`

- Why they are skipped ?

To enable users to concentrate on one test at a time and enable one by one as they evolve the solution.

- How to enable them ?

Change `xtest` to `test`.

```javascript
test('title cased phrases', () => {
  expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
});
```

## Making Your First JavaScript 2015 Module

Usually, tests on this track will load your implementation by importing it as a JavaScript module: `import { Bob } from './bob.js';`.
You just need to export your implementation from the referenced file, `bob.js`:

```javascript
export function hey(message) {}
```

You can find more information about modules in the [Babel documentation](https://babeljs.io/docs/learn-es2015/#modules).
To make it easier to get started, there is a _skeleton_ JavaScript file in the directory.
