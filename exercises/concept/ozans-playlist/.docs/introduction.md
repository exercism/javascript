# Introduction

In JavaScript, a [set][mdn-sets] is a list-like structure containing unique values, which can be primitives and/or object references. Unlike an array, a set's elements cannot be accessed by index.

A value cannot be added to a set if it is [strictly equal][mdn-strict-equality] to any of the set's elements.

```javascript
const set = new Set();
const object = { color: 'lime green' };
const functionallyIdenticalObject = { color: 'lime green' };

set.add(object);
set.add('wow');
set.add(77);

console.log(set.size);
//=> 3

set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
console.log(set.size);
//=> 4

set.add(77); // not added because 77 is strictly equal to 77
console.log(set.size);
//=> 4
```

You can provide an array as an argument when creating a set, and the array's values will become the values of the set, also removing the duplicate values.

```javascript
const array = [1, 5, 4, 1];
const set = new Set(array); // the set's values become [1, 5, 4]

console.log(set.size);
//=> 3
```

To convert a set to an array, you can use [Array.from()][mdn-array-from], which converts an iterable such as a set or a map to an array.

```javascript
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

const array = Array.from(set);
console.log(array);
//=> [1, 2, 3, 4]
```

[mdn-sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[mdn-strict-equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using
[mdn-array-from]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
