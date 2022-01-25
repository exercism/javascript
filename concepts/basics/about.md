# About

JavaScript is a dynamic, prototype-based language. It has a few [primitives][mdn-primitive], and everything else is considered an object.

While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js. The language is actively being developed; and because of its multi-paradigm property, allows for many styles of programming. JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

## (Re-)Assignment

There are a few primary ways to assign values to names in JavaScript - using variables or constants. On Exercism, variables are always written in [camelCase][wiki-camel-case]; constants are written in [SCREAMING_SNAKE_CASE][wiki-snake-case]. There is no official guide to follow, and various companies and organizations have various style guides. _Feel free to write variables any way you like_. The upside from writing them the way the exercises are prepared is that they'll be highlighted differently in the web interface and most IDEs.

Variables in JavaScript can be defined using the [`const`][mdn-const], [`let`][mdn-let] or [`var`][mdn-var] keyword.

A variable can reference different values over its lifetime when using `let` or `var`. For example, `myFirstVariable` can be defined and redefined many times using the assignment operator `=`:

```javascript
let myFirstVariable = 1;
myFirstVariable = 'Some string';
myFirstVariable = new SomeComplexClass();
```

In contrast to `let` and `var`, variables that are defined with `const` can only be assigned once. This is used to define constants in JavaScript.

```javascript
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```

### Constant Assignment

The `const` keyword is mentioned _both_ for variables and constants. Another concept often mentioned around constants is [(im)-mutability][wiki-mutability].

The `const` keyword only makes the _binding_ immutable, that is, you can only assign a value to a `const` variable once. In JavaScript, only [primitive][mdn-primitive] values are immutable. However, [non-primitive][mdn-primitive] values can still be mutated.

```javascript
const MY_MUTABLE_VALUE_CONSTANT = { food: 'apple' };

// This is possible
MY_MUTABLE_VALUE_CONSTANT.food = 'pear';

MY_MUTABLE_VALUE_CONSTANT;
// => { food: "pear" }
```

### Constant Value (Immutability)

As a rule, on Exercism, and many other organizations and project style guides, don't mutate values that look like `const SCREAMING_SNAKE_CASE`. Technically the values _can_ be changed, but for clarity and expectation management on Exercism this is discouraged. When this _must_ be enforced, use [`Object.freeze(value)`][mdn-object-freeze].

```javascript
const MY_VALUE_CONSTANT = Object.freeze({ food: 'apple' });

// This silently fails
MY_VALUE_CONSTANT.food = 'pear';

MY_VALUE_CONSTANT;
// => { food: "apple" }
```

In the wild, it's unlikely to see `Object.freeze` all over a code base, but the rule to not mutate a `SCREAMING_SNAKE_CASE` value ever, is a good rule; often enforced using automated analysis such as a linter.

## Function Declarations

In JavaScript, units of functionality are encapsulated in _functions_, usually grouping functions together in the same file if they belong together. These functions can take parameters (arguments), and can _return_ a value using the `return` keyword. Functions are invoked using `()` syntax.

```javascript
function add(num1, num2) {
  return num1 + num2;
}

add(1, 3);
// => 4
```

> 💡 In JavaScript there are _many_ different ways to declare a function. These other ways look different than using the `function` keyword. The track tries to gradually introduce them, but if you already know about them, feel free to use any of them. In most cases, using one or the other isn't better or worse.

## Export and Import

The `export` and `import` keywords are powerful tools that turn a regular JavaScript file into a [JavaScript module][mdn-module]. Apart from allowing code to selectively expose components, such as functions, classes, variables and constants, it also enables a whole range of other features, such as:

- [Renaming exports and imports][mdn-renaming-modules], which allows you to avoid naming conflicts,
- [Dynamic Imports][mdn-dynamic-imports], which loads code on demand,
- [Tree shaking][blog-tree-shaking], which reduces the size of the final code by eliminating side-effect free modules and even contents of modules _that are not used_,
- Exporting [_live bindings_][blog-live-bindings], which allows you to export a value that mutates everywhere it's imported if the original value mutates.

A concrete example is how the tests work on Exercism's JavaScript Track. Each exercise has at least one implementation file, for example `lasagna.js`, and each exercise has at least one test file, for example `lasagna.spec.js`. The implementation file uses `export` to expose the public API and the test file uses `import` to access these, which is how it can test the implementation's outcomes.

```javascript
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```

[blog-live-bindings]: https://2ality.com/2015/07/es6-module-exports.html#es6-modules-export-immutable-bindings
[blog-tree-shaking]: https://bitsofco.de/what-is-tree-shaking/
[mdn-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[mdn-dynamic-imports]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports
[mdn-let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[mdn-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[mdn-object-freeze]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
[mdn-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[mdn-renaming-modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Renaming_imports_and_exports
[mdn-var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[wiki-mutability]: https://en.wikipedia.org/wiki/Immutable_object
[wiki-camel-case]: https://en.wikipedia.org/wiki/Camel_case
[wiki-snake-case]: https://en.wikipedia.org/wiki/Snake_case
