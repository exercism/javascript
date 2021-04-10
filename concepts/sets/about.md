# About

In JavaScript, a [set][mdn-sets] is a list-like data structure that can only contain unique primitives and/or object references.

Sets must be created using the [set constructor][mdn-set-constructor]; they can be initialized with values by passing an array to the constructor.

```javascript
const emptySet = new Set();
const setWithInitialValues = new Set(['hello', 'world']);
```

## Adding and removing elements

A value cannot be added to a set if it is [strictly equal][mdn-strict-equality] to any of the set's elements.

```javascript
const set = new Set();
set.add(10);
set.add(10); // 10 is strictly equal to 10, so it can't be added again
set.size;
//=> 1;

set.has(10);
//=> true
set.delete(10);
//=> true; 10 was removed
set.delete(10);
//=> false; 10 is not in the set, so nothing happened

const obj = { color: 'magenta' };
const eerilySimilarObj = { color: 'magenta' };

set.add(obj);
set.add(eerilySimilarObj); // obj and eerilySimilarObj reference different objects, so they can both be added
set.size;
//=> 2

set.clear();
set.size;
//=> 0
```

## Converting between sets and arrays

Arrays are converted to sets using the set constructor. Sets can be converted to arrays using either [spread syntax][mdn-spread-syntax] or `Array.from()`.

```javascript
const arrayWithDuplicates = [7, 3, 3, 9, 3];
const arrayWithoutDuplicates = [...new Set(arrayWithDuplicates)]; // [7, 3, 9]
const anotherArrayWithoutDuplicates = Array.from(new Set(arrayWithDuplicates)); // [7, 3, 9]
```

## Iteration

A set is a [keyed collection][mdn-keyed-collections], which means its elements are indexed by a key and can be iterated in insertion order. Because the _key_ and _value_ of a set element are the same, `Set.keys()` and `Set.values()` are interchangeable.

```javascript
const apples = ['Granny Smith', 'Honey Crisp', 'Royal Gala'];
const appleSet = new Set(apples);

for (let apple of appleSet.keys()) {
  console.log(apple);
}
// 'Granny Smith'
// 'Honey Crisp'
// 'Royal Gala'

for (let apple of appleSet.values()) {
  console.log(apple);
}
// 'Granny Smith'
// 'Honey Crisp'
// 'Royal Gala'

for (let apple of appleSet.entries()) {
  console.log(apple);
}
// ['Granny Smith', 'Granny Smith']
// ['Honey Crisp', 'Honey Crisp']
// ['Royal Gala', 'Royal Gala']
```

## Lookup performance vs. arrays

When a set is chosen to store a collection of data (rather than an array), it's generally because the stored values need to be unique. However, since it's possible to enforce uniqueness with arrays too, it may not be obvious why that is.

The short answer is that sets are optimized for searching, and arrays are not. Array search methods (such as `Array.indexOf()`) have runtimes that increase linearly with the size of the array; that is, the more elements the array contains, the longer it takes to search it. Set search methods, on the other hand, have constant runtimes, meaning they stay the same regardless of the set's size.

In practice, though, this performance difference is negligible unless the collection contains a huge amount of data.

[mdn-sets]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[mdn-strict-equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using
[mdn-set-constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
[mdn-keyed-collections]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections
[mdn-spread-syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
