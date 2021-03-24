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

The initialization usually sets up a counter variable, the condition checks whether the loop should be continued or stopped and the step increments the counter at the end of each repetition.
The individual parts of the header are separated by semicolons.

```javascript
const list = ['a', 'b', 'c'];
for (let i = 0; i < list.length; i++) {
  // code that should be executed for each item in the array
}

// i is not available here
```

Variables that are defined in the header with `let` are scoped to the for statement.
In the example above you would see `ReferenceError: i is not defined` if you would try to access the counter outside of the for loop.

All three parts of the header are optional.
This is rarely utilized in practice.
You can read more about this in the [MDN documentation][mdn-optional-header-parts]

## Nested For Loops

For loops can be nested, for example to iterate over nested (multi-dimensional) [arrays][concept-arrays].
Make sure to set up a different counter variable for each loop.

```javascript
const coords = [
  [1, 2],
  [4, 7],
  [10, -3],
];

for (let i = 0; i < coords.length; i++) {
  for (let j = 0; j < coords[i].length; j++) {
    // do something with coords[i][j]
  }
}
```

## Break, Continue and Labels

Inside a loop body you can use the `break` keyword to stop the execution of the loop entirely.
Additionally there is the keyword `continue` to only stop the execution of the current iteration and continue with the next one.

When working with nested loops, `break` and `continue` always apply to the innermost loop by default.
You can use labels to change that behavior.
A label is an identifier name followed by a colon.
It is placed in front (or above) the loop.
Such a label can then be combined with `break` or `continue` to define which loop the statement should apply to.

```javascript
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // ...
    if (j > 5) {
      continue outer;
    }
    // ...
  }
}
```

## Loop Counter and Asynchronous Code

You need to be careful to correctly declare your counter variable when dealing with [asynchronous code][mdn-concept-asynchronous].
Let us look at an example where we sum up the counter variable asynchronously after waiting for 1s with `setTimeout`.
When declaring the counter with `var` or with `let` but outside the header, the code does not lead to the expected result.

<!-- prettier-ignore-start -->
```javascript
let sum = 0;
for (var i = 1; i < 4; i++) {
  setTimeout(function () { sum += i; }, 1000);
}
// eventually sum will be 12 instead of 6 (1+2+3)
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```javascript
let sum = 0;
let i;
for (i = 1; i < 4; i++) {
  setTimeout(function () { sum += i; }, 1000);
}
// same here, eventually sum will be 12 instead of 6 (1+2+3)
```
<!-- prettier-ignore-end -->

In these two cases `i` is not scoped to one specific loop iteration.
By the time the sum is calculated, `i` already reached its final value `4` which leads to the sum being `4 + 4 + 4 = 12`.

This problem can be avoided by declaring the counter with `let` inside the header.
This has the special effect that each iteration gets its very own variable `let i` that is scoped to exactly that one execution of the loop body.
So when the sum is calculated later, each of the functions refers to their own variable `i` that still holds the correct value.

<!-- prettier-ignore-start -->
```javascript
let sum = 0;
for (let i = 1; i < 4; i++) {
  setTimeout(function () { sum += i; }, 1000);
}
// eventually sum will be 6 (1+2+3) as expected
```
<!-- prettier-ignore-end -->

[mdn-optional-header-parts]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#optional_for_expressions
[concept-arrays]: /tracks/javascript/concepts/arrays
[mdn-concept-asynchronous]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts
