Install [Node.js](http://nodejs.org):

* **Windows and OS X users**: can
[download an Installer](https://nodejs.org/en/download/)
* **Linux users**: can install it
[via package manager](https://nodejs.org/en/download/package-manager/)

[linstall]: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager


If you've used the official installer, your `PATH` should have been automatically
configured, but if your shell has trouble locating your globally installed
modules&mdash;or if you build Node.js from source&mdash;update your `PATH` to
include the `npm` binaries by adding the following to either `~/.bash_profile` or
`~/.zshrc`:

```bash
$ export PATH=/usr/local/share/npm/bin:$PATH
```

Each assignment needs some tools to run the tests:

* [Jest](https://facebook.github.io/jest/): a test runner based on Jasmine
* [Babel](https://github.com/babel/babel): to transpile ECMAScript
2015 code to ECMAScript 5
* [ESLint](http://eslint.org/) (optional): to perform several static analysis and
coding style checks to your ECMAScript code.

They can be installed running this command within each assignment directory:

```bash
$ npm install
```
