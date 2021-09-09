# Introduction

JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

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

> 💡 In a later Concept Exercise the difference between _constant_ assignment / binding and _constant_ value is explored and explained.

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

## Exposing to Other Files

To make a `function`, a constant, or a variable available in _other files_, they need to be [exported][mdn-export] using the `export` keyword. Another file may then [import][mdn-import] these using the `import` keyword. This is also known as the module system. A great example is how all the tests work. Each exercise has at least one file, for example `lasagna.js`, which contains the _implementation_. Additionally there is at least one other file, for example `lasagna.spec.js`, that contains the _tests_. This file _imports_ the public (i.e. exported) entities in order to test the implementation:

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

[mdn-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[mdn-export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[mdn-let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[mdn-var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[wiki-camel-case]: https://en.wikipedia.org/wiki/Camel_case
[wiki-snake-case]: https://en.wikipedia.org/wiki/Snake_case
