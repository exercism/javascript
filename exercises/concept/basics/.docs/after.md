JavaScript is a dynamic, prototype based language. It has a few [primitives][mdn-primitive], and everything else is considered an object.

While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js. The language is actively being developed; and because of it's multi-paradigm property, allows for many styles of programming.

## Constants, `const` and immutability

In the introduction, the `const` keyword was mentioned _both_ for variables and constants. Another concept often mentioned around constants is [(im)-mutability][wiki-mutability].

The `const` keyword only makes the _binding_ immutable, that is, you can only assign a value to a `const` variable once. In JavaScript, only [primitive][mdn-primitive] values are immutable. However, [non primitive][mdn-primitive] values can still be mutated.

```javascript
const MY_MUTABLE_VALUE_CONSTANT = { food: 'apple' }

// This is possible
MY_MUTABLE_VALUE_CONSTANT.food = 'pear'

MY_MUTABLE_VALUE_CONSTANT
// => { food: "pear" }
```

As a rule, we don't mutate values that look like `const SCREAMING_SNAKE_CASE`. When we _must_ to enforce this, use [`Object.freeze(value)`][mdn-object-freeze].

```javascript
const MY_VALUE_CONSTANT = Object.freeze({ food: 'apple' })

// This silently fails
MY_MUTABLE_VALUE_CONSTANT.food = 'pear'

MY_MUTABLE_VALUE_CONSTANT
// => { food: "apple" }
```

In the wild, it's unlikely to see `Object.freeze` all over a code base, but the rule to not mutate a `SCREAMING_SNAKE_CASE` value ever, is a good rule; often enforced using automated analysis such as a linter.

## Export and import

The `export` and `import` keywords are powerful tools that turn a regular JavaScript file into a [JavaScript module][mdn-module]. Apart from allowing code to selectively expose components, such as functions, classes, variables and constants, it also enables a whole range of other features, such as:

- [Renaming exports and imports][mdn-renaming-modules], which allows you to avoid naming conflicts,
- [Dynamic Imports][mdn-dynamic-imports], which loads code on demand,
- [Tree shaking][blog-tree-shaking], which reduces the size of the final code by eliminating side-effect free modules and even contents of modules _that are not used_,
- Exporting [_live bindings_][blog-live-bindings], which allows you to export a value that mutates everywhere it's imported if the original value mutates.

[blog-live-bindings]: https://2ality.com/2015/07/es6-module-exports.html#es6-modules-export-immutable-bindings
[blog-tree-shaking]: https://bitsofco.de/what-is-tree-shaking/
[mdn-dynamic-imports]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports
[mdn-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[mdn-object-freeze]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
[mdn-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[mdn-renaming-modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Renaming_imports_and_exports
[wiki-mutability]: https://en.wikipedia.org/wiki/Immutable_object
