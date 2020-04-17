# `export`

The `export` keyword is used to define which elements in the current file will be importable into other files using the [`import`][keyword-import] keyword.

There are two types of exports, the `default` export and named exports.

## Default export

The default export is marked using the `default` modifier:

```js
export default class XYZ {}
```

## Named exports

Named exports can have multiple forms, some of those are:

```js
export class XYZ {}
export const foo = 'bar'
export { foo, bar } // this exports a list of multiple features
```

## Export-from-syntax / Re-exporting modules

There is also a syntax that allows for `import`ing modules and directly `export`ing all or parts of it:

```js
export * from 'other_module' // exports all features of `other_module`
export { foo, bar } from 'src/other_module' // exports foo & bar from `other_module`
export { foo as myFoo, bar } from 'src/other_module' // renaming also works
```

One caveat about re-exporting is that `default` exports are ignored by this syntax (as [explained here][no-default-in-reexport]).

## Transpilation

To make `export`s work, we use transpilers like [babel][babel] or [tsc][tsc] that take those modules and convert them into own file (or even multiple). Babel also has the benefit of another form of `export`s, the so-called `synthetic default export`:

```js
exports = class XYZ {}
```

Which will be translated the first mentioned example (`export deafult class XYZ{}`).

## ECMAScript 6 modules vs CommonJS modules

There are different kind of [modules][concept-module] that have different ways how to export things. The examples above are all [ECMAScript 6 modules][es6-modules] and are mostly available through preprocessors like [babel][babel]. In [Node.js][node-js] environments however [CommonJS modules][cjs-modules] are used. They usually take the following form (note that there is no `default` export):

```js
var foo = 42
function square(x) {
  return x * x
}
module.exports = {
  foo: foo,
  square: square,
}
```

## Where to use

The `export` keyword, just like `import`, can only be used in a module, which means it has to be run in [Node.js][node-js], transpiled by [babel][babel] or therelike or be used in a [file included in the browser directly][es-modules-in-browser] using `<script type="module" src="…">`.

## Further reading

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

> https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

[keyword-import]: ./import.md
[concept-module]: ../info/modules.md
[es6-modules]: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
[babel]: https://babeljs.io/
[tsc]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
[node-js]: https://nodejs.org/
[cjs-modules]: https://en.wikipedia.org/wiki/CommonJS
[no-default-in-reexport]: https://github.com/babel/babel/issues/826
[es-modules-in-browser]: https://jakearchibald.com/2017/es-modules-in-browsers/
