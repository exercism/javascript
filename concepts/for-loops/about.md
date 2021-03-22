# About

## General Syntax

The for loop is one of the most commonly used statements to repeatedly execute some logic.
In JavaScript it consists of the `for` keyword, a _header_ wrapped in round brackets and a code block that contains the _body_ of the loop wrapped in curly brackets.

```javascript
for (initialization; condition; step) {
  // code that is executed repeatedly as long as the condition is true
}
```

## Header

The initialization usually sets up a loop counter, the condition checks whether the execution should be continued or stopped and the step increments the counter.
The individual parts of the header are separated by semicolons.

```javascript
const list = ['a', 'b', 'c'];
for (let i = 0; i < list.length; i++) {
  // code that should be executed for each item in the array
}

// i cannot be accessed here
```

Variables that are defined in the header are scoped to the for statement.
They are not available outside of it.

All parts of the header are optional.
This is rarely utilized in practice.
You can read more about this in the [MDN documentation][mdn-optional-header-parts]

## Nested For Loops

For loops can be nested, for example to iterate over nested (multi-dimensional) [arrays][concept-arrays]. Make sure to set up a different counter variable for each loop.

```javascript
const coords = [
  [1, 2],
  [4, 7],
  [10, -3],
  [-9, 5],
];

for (let i = 0; i < coords.length; i++) {
  for (let j = 0; j < coords[i].length; j++) {
    // do something with coords[i][j]
  }
}
```

## Break and Continue

## Labels

[mdn-optional-header-parts]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#optional_for_expressions
[concept-arrays]: /tracks/javascript/concepts/arrays
