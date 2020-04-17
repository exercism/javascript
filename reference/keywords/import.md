# `import`

The `import` statement is used to load [functions][concept-function], [variables][concept-variable] and [classes][concept-class] from other [modules][concept-modules] into the current file.

It comes in multiple versions that can load the `default` [`export`][concept-export], some or all named exports and rename them on the fly:

```js
import defaultExport from 'module-name' // Load default export
import * as name from 'module-name' // Load all named exports for access via `name.namedExport`
import { myExport } from 'module-name' // Only imports the myExport named export.
import { myExport as expert } from 'module-name' // Only imports the myExport but aliases it to expert
import { default as namedDefault, myExport } from 'module-name' // Imports the default export as namedDefault, and myExport
```

Typically, the `module-name` can be either a [NPM][npm]-installed package – which reside in the `node_modules/` directory – or a relative link, such as `./myFile.js`. But there are also JavaScript interpreter out there, where those `modules` can even be URLs, like in [deno][deno].

## ECMAScript 6 modules vs CommonJS modules

Mentioned above are all import statements valid in [ECMAScript][ecma-script]. Before the standardization of `import`s in ECMAScript there was CommonJS, which was developed to bring modules to non-browser contexts, such as [Node.js][node-js]. An import there looks like this:

```js
const allExports = require('module-name') // Loads all exports for access via `allExports.namedExport`
```

This was the primarily way of importing modules in Node.js, but current versions also understand the newer ECMAScript version as described above. Read more on modules on the [module page][concept-module].

## Where to use

The `import` keyword, just like `export`, can only be used in a module, which means it has to be run in [Node.js][node-js], transpiled by [babel][babel] or therelike or be used in a [file included in the browser directly][es-modules-in-browser] using `<script type="module" src="…">`.

## Further reading

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

[concept-function]: ../../../../reference/concepts/functions.md
[concept-variable]: ../../../../reference/concepts/variables.md
[concept-class]: ../../../../reference/concepts/classes.md
[concept-module]: ../info/modules.md
[concept-export]: ./export.md
[deno]: https://deno.land
[node-js]: https://nodejs.org/
[es-modules-in-browser]: https://jakearchibald.com/2017/es-modules-in-browsers/
[ecma-script]: https://ecma-international.org/ecma-262/6.0/
