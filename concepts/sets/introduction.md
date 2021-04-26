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

[mdn-sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[mdn-strict-equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using
