# Introduction

In javascript, it is very common to work with arrays. That explains why there are a lot of builtin methods to easy this operations. Some of them are used to transform the array into another array, a number, an object etc... We'll call these operations "transformations".

Among the most commons, we can find :

- `map`:

Create a new array by transforming each element according to a function passed as an argument.

```javascript
let arr = [1, 2, 3, 4];

function decrement(value) {
  return value - 1;
}

arr.map(decrement); // [0, 1, 2, 3]
```

This function is pure, meaning that it does not modify the original array.

> It is worth noting that the resulting array will always be of the same length as the original

- `filter`:

Creates an array by filtering the current one, given a filtering function (that returns true if the element should be kept and false if it should be removed)

```javascript
let arr = [1, 2, 3, 4];

function isOdd(value) {
  return value % 2 === 0;
}

arr.filter(isOdd); // [2, 4]
```

This function is also pure.

- `reduce`:

Using an "accumulator", reduces the array in a single value by applying for each element of the array a function that takes as parameters the accumulator and the current element and returns the new accumulator.

```javascript
let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  function (accumulator, currentValue) {
    if (currentValue % 2 === 0) {
      accumulator.odd.push(currentValue);
    } else {
      accumulator.even.push(currentValue);
    }

    return accumulator;
  },
  { odd: [], even: [] }
); // { odd: [2, 4], even: [1, 3] }
```
