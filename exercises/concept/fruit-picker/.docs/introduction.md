# Introduction

## Callbacks

Callbacks are functions that are passed as arguments to another function. This is often done to control the order of execution in an asynchronous context. Writing a callback function is no different from writing a function, but the callback function's arguments must match the signature required by the calling function.

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

applyToSquare(areaOfSquare); // => 25
```

You may also write callbacks as a function expression:

```javascript
applyToSquare(function squarePerimeter(side) {
  return side * 4;
});
```

## Arrow Functions

Besides function declarations and function expressions, JavaScript also has another very concise syntax for defining a function.
These functions are called _arrow functions_.

Here is a comparison between a function declaration and an arrow function.

```javascript
function addUpTwoNumbers(num1, num2) {
  return num1 + num2;
}

// function keyword removed and => added
const addUpTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
```

If the function body contains only a return statement, like in the example above, the `{}` and the `return` keyword can be omitted.
If there is only one parameter, the parenthesis `()` can be omitted as well.

<!-- prettier-ignore-start -->
```javascript
const addUpTwoNumbers = (num1, num2) => num1 + num2;
const square = num => num * num;
```
<!-- prettier-ignore-end -->

Arrow functions are often used to define short callback functions directly in the function call.

<!-- prettier-ignore-start -->
```javascript
applyToSquare(number => number * number);
```
<!-- prettier-ignore-end -->
