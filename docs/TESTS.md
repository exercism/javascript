Execute the tests with:

```bash
$ gulp test
```

## Making Your First ECMAScript 2015 Module

Usually, tests on this track will load your implementation importing it as a
ECMAScript 2015 module: `import Bob from './bob.js';`. To make it work, you just
needs to export your implementation from the file the tests are looking for
your module, `bob.js`:

```javascript
export default class Bob {
  hey(message) {
	//
	// Your solution to the exercise goes here
	//
  }
}
```

You can find more information about modules in the
[Babel documentation](https://babeljs.io/docs/learn-es2015/#modules).
To make it easier to get started, there is a *skeleton* ECMAScript file in the
directory for the first exercise.
