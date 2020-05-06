JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

There are a few primary ways to assign values to names in JavaScript - using variables or constants. On Exercism, variables are always written in [camelCase][wiki-camel-case]; constants are written in [SCREAMING_SNAKE_CASE][wiki-snake-case].

Variables in JavaScript can be defined using the [`const`][mdn-const], [`let`][mdn-let] or [`var`][mdn-var] keyword. A variable can reference different objects over its lifetime when using `let` or `var`, but can not be reassigned when using `const`. For example, `myFirstVariable` can be defined and redefined many times using the `=` operator:

```javascript
let myFirstVariable = 1
myFirstVariable = 'Some string'
myFirstVariable = new SomeComplexClass()
```

Constants in JavaScript can only be defined using `const`. These are meant to be assigned only once. For clarity, on Excercism they must start with capital letters and are normally written in block capitals with words separated by underscores. For example:

```javascript
const MY_FIRST_CONSTANT = 10

// Can not be re-assigned
MY_FIRST_CONSTANT = 20
// => TypeError: Assignment to constant variable.
```

In JavaScript, units of functionality are encapsulated in _functions_, usually grouping functions together in the same file if they belong together. These functions can take arguments, and can return a value using the `return` keyword. Methods are invoked using `()` syntax.

```javascript
function add(num1, num2) {
  return num1 + num2
}

add(1, 3)
// => 4
```

To make a `function`, constant, or variable available in _other files_, they need to be [exported][mdn-export] using the `export` keyword. Another file may then [import][mdn-import] these using the `import` keyword.

```javascript
// file.js
export const MY_VALUE = 10

export function add(num1, num2) {
  return num1 + num2
}

// file.spec.js
import { MY_VALUE, add } from './file'

add(MY_VALUE, 5)
// => 15
```

[mdn-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[mdn-export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[mdn-let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[mdn-var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[wiki-camel-case]: https://en.wikipedia.org/wiki/Camel_case
[wiki-snake-case]: https://en.wikipedia.org/wiki/Snake_case
