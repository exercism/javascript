# Introduction

Callbacks are functions that are passed as arguments to another function. This is often done to control the order of execution in an asynchronous context. Writing a callback function is no different from writing a function, but the callback function's arguments must match the signature required by the calling function.

```javascript
const squareLength = 5;

// Caller function takes a callback function
function applyToSquare(callback) {
  return callback(squareLength);
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

Or an anonymous inline arrow function expression:

```javascript
applyToSquare((side) => side * 4);
```

// The argument "(side) => side \* 4" is the callback
