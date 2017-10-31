Execute the tests with:

```bash
$ npm run test
```

Be sure your code follows best practices and coding styles, as other users do, with
ESLint, a tool to perform static analysis to your code. Sometimes, tools like this
save you some time detecting typos or silly mistakes in your ECMAScript code:

```bash
$ npm run lint
```

Or do both at the same time:

```bash
$ npm run lint-test
```

You can also run Jest in "watch" mode, which will re-run your tests automatically when you save changes to the code or test module:

```bash
$ npm run watch
```


## Making Your First ECMAScript 2015 Module

Usually, tests on this track will load your implementation by importing it as an
ECMAScript 2015 module: `import Bob from './bob.js';`. You just
need to export your implementation from the referenced file, `bob.js`:

```javascript
export default class Bob {
  hey(message) {
	//
	// Your solution to the exercise goes here
	//
  }
}
```

## How to Skip Tests

The skip method instructs the test suite to not run a test. This is commonly used to avoid running tests of unimplemented functionality, so you can focus on the part you are currently working on.

The skip method could be used also under the aliases: `it.skip(name, fn) or xit(name, fn) or xtest(name, fn)`

```javascript
  xtest('title cased phrases', () => {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });
```

You can find more information about modules in the
[Babel documentation](https://babeljs.io/docs/learn-es2015/#modules).
To make it easier to get started, there is a *skeleton* ECMAScript file in the
directory for the first exercise.
