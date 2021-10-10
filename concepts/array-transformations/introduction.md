# Introduction

In JavaScript, the `Array` class has many powerful built-in functions for transforming arrays. These functions make it much easier to do things than it otherwise would be using a simple for loop or more direct manipulation.

Here is a presentation of some of the most commons methods. Those are [_pure_][pure-function-definition] functions. This implies that calling them do not modify the original array.

### map

Create a new array by transforming each element according to a function passed as an argument.

```javascript
let arr = [1, 2, 3, 4];

arr.map((value) => value - 1); // [0, 1, 2, 3]
console.log(arr); // [1, 2, 3, 4]
```

> It is worth noting that the resulting array will always be of the same length as the original

### filter

Creates an array by filtering the current one, given a filtering function (that returns true if the element should be kept and false if it should be removed)

```javascript
let arr = [1, 2, 3, 4];

arr.filter((value) => value % 2 === 0); // [2, 4]
```

### reduce

Reduces the array to a single value using a function that takes as parameters an "accumulator" and the current element of the array. This function instructs how the current element must be merged into the accumulator and returns the accumulator that will be used on the next iteration.

```javascript
let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
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

[pure-function-definition]: https://en.wikipedia.org/wiki/Pure_function
