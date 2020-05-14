In JavaScript, instances of an `Array` are regular objects, decorated with lots of [useful methods][array-docs] from the `Array.prototype`. It includes the `length` property, as well as methods for traversing, analyzing and mutating the array. The array's elements are indexed properties of that array.
Instead of manually iterating over those indexed properties, use array analysis.

In general, using the abstractions/built-in methods is more idiomatic, readable and maintainable than using a `for` or `.forEach` equivalent.

```javascript
const values = [1, 2, 5, 8, 8, 10]

// Array#some stops iteration as soon as the given predicate returns true; it
// returns false if none of the elements in the array pass the predicate. In
// other words: return true if for some item the given function returns true.
//
const isOdd = (item) => item % 2 === 1
const areSomeOdd = values.some(isOdd)
// => true

// Array#every stops iteration as soon as the given predicate returns false; it
// returns true if each and every element passes the predicate. In other words:
// return true if for every item the given function returns true
//
const areAllPositive = values.every((item) => item >= 0)
// => true

// Most array analysis predicates get more than one argument as their input. In
// most cases it will be:
//
// 1. item:  the current element being evaluated
// 2. index: the index associated with that element
// 3. self:  the array itself
//
// Since Array#indexOf(value) returns the first index of value in the array, it
// can be used to determine if a particular (item, index) pair does NOT match
// the first occurrence of the item. Only for the first occurrence, the index
// of the item will match the passed in index.
//
//   ['a', 'b', 'a'].indexOf('a')
//   // => 0
//
//   isDuplicate('a', 0, ['a', 'b', 'a'])
//   // => false
//   isDuplicate('b', 1, ['a', 'b', 'a'])
//   // => false
//   isDuplicate('a', 2, ['a', 'b', 'a'])
//   // => true
//
function isDuplicate(item, index, self) {
  return self.indexOf(item) !== index
}

const indexOfFirstDuplicate = values.findIndex(isDuplicate)
// => 4

// Some of the analysis functions don't take a predicate but instead take a
// value directly.
//
// Array#includes is the same as the more verbose options:
//
//   values.some((item) => item === 42)
//   values.indexOf(42) !== -1
//
// Array#indexOf is the same as the more verbose option:
//
//   values.findIndex((item) => item === 42) !== 1
//
const hasValue42 = values.includes(42)
// => false
```

[array-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
