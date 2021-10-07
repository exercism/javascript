# Introduction

Besides function declarations and function expressions, JavaScript also has another very concise syntax for defining a function.
These functions are called _arrow functions_.

Callbacks are functions which are passed as arguments to another function.
This is often done to control the order of execution in an asynchronous context.
Writing a callback function is no different from writing a function, but the callback function's arguments must match the signature required by the calling function.

<!-- prettier-ignore-start -->
```javascript
const squareLength = 5;

// Caller function takes a callback function
function applyToSquare(callback) {
  callback(squareLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(number) {
  return number * number;
}

// Written using arrow function syntax
const areaOfSquare = (number) => number * number;

applyToSquare(areaOfSquare); // => 25
```
<!-- prettier-ignore-end -->

Callbacks can be written as a function expression or an arrow function:

<!-- prettier-ignore-start -->
```javascript
// function expression
applyToSquare(function squarePerimeter(side) {
  return side * 4;
});

// arrow function
applyToSquare(side => side * 4)
```
<!-- prettier-ignore-end -->
