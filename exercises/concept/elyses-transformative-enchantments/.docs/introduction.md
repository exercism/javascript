# Introduction

In JavaScript, the `Array` class has many powerful built-in methods for transforming arrays.
These methods make it much easier to convert one array into another than it otherwise would be using a simple for loop or more direct manipulation.

Some methods are [_pure_][pure-function-definition], meaning that they do not modify the original array.
They return a new one instead.
Other methods however manipulate the array they are called on and do **not** return the modified array.

Some of the most commonly used methods to transform arrays are presented below.
A full list of available methods can be found in the [MDN documentation][array-methods].

### map (pure)

Create a new array by transforming each element according to a function passed as an argument.
These callback functions are often written as [arrow functions][concept-arrow-functions].

```javascript
let arr = [1, 2, 3, 4];

const newArr = arr.map((value) => value - 1);
console.log(newArr);
// => [0, 1, 2, 3]
console.log(arr);
// => [1, 2, 3, 4]
```

It is worth noting that the resulting array will always be of the same length as the original.

### filter (pure)

Creates an array by filtering the current one, given a filtering function (that returns true if the element should be kept and false if it should be removed).

```javascript
let arr = [1, 2, 3, 4];

arr.filter((value) => value % 2 === 0);
// => [2, 4]
```

### reduce (pure)

Reduces the array to a single value using a function that takes an _accumulator_ and the current element of the array as parameters.
This function instructs how the current element must be merged into the accumulator and returns the accumulator that will be used on the next iteration.

```javascript
let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// => 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator;
  },
  { even: [], odd: [] }
);
// => { even: [2, 4], odd: [1, 3] }
```

### reverse

Reverses the elements of an array.

```javascript
const arr = [1, 2, 3, 4];

arr.reverse();
// => [4, 3, 2, 1]
```

This method modifies the array it is called on.

### slice (pure)

Given a start and an end index, creates a sub-array from the array passed as a parameter.

The element at the end index will not be included.
Also, all parameters are optional:
the start index defaults to `0`, and the end index defaults to the array length.

```javascript
const arr = [1, 2, 3, 4];

arr.slice(1, 2); // [2]
arr.slice(1); // [2, 3, 4]
// You can also use negative numbers, that represent the indexes
// starting from the end of the array
arr.slice(-2); // [3, 4]
```

### splice

Removes or replaces and/or adds new elements of an array.

It takes the following parameters:

- the index of the element where to start modifying the array
- the number of elements to delete
- the elements to insert in the array (optional)

`splice` returns the elements that have been removed.

```javascript
const arr = ['1', '2', '5', '6'];

// Insert an element at index 2
arr.splice(2, 0, '3');
console.log(arr);
// => ['1', '2', '3', '5', '6']

// Remove 2 elements, starting at index 3 and insert 2 elements
const removed = arr.splice(3, 2, '4', '5');
console.log(removed);
// => ['5', '6']
console.log(arr);
// => ['1', '2', '3', '4', '5']

// Remove 1 element at index 1
arr.splice(1, 1);
console.log(arr);
// => ['1', '3', '4', '5']
```

### sort

By default, `sort` sorts the elements of an array by first converting them to strings and then applying string comparison (see [Concept Comparison][concept-comparison]).
The sorting happens _in-place_ which means the original array is modified.
`sort` also returns that modified array which is convenient if you want to chain other methods to it.

```javascript
const arr = ['c', 'a', 'z', 'b'];
const result = arr.sort();
console.log(result);
// => ['a', 'b', 'c', 'z']
console.log(arr);
// => ['a', 'b', 'c', 'z']
```

To customize the sorting behavior, you can pass a comparison function as an argument.
The comparison function itself is called with two arguments which are two elements of the array.
It then needs to return the following:

- a negative number if the first argument should be sorted before the second
- a positive number if the first argument should be sorted after the second
- `0` if the order of the elements should stay the same

Here is an example of how to use a custom comparison function can be used to sort an array of objects.

```javascript
const arr = [
  { name: 'Lydia', age: 7 },
  { name: 'Anne', age: 34 },
  { name: 'Holger', age: 59 },
];

arr.sort((item1, item2) => {
  if (item1.name < item2.name) {
    return -1;
  }
  if (item1.name > item2.name) {
    return 1;
  }
  return 0;
});
// => [ { name: 'Anne', age: 34 }, { name: 'Holger', age: 59 },
// { name: 'Lydia', age: 7 } ]
```

[pure-function-definition]: https://en.wikipedia.org/wiki/Pure_function
[array-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
[concept-arrow-functions]: /tracks/javascript/concepts/arrow-functions
[concept-comparison]: /tracks/javascript/concepts/comparison
