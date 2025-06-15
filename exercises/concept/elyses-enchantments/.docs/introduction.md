# Introduction

In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types.

To create an array, add elements between square brackets `[]`.
To read from the array, put the index in square brackets `[]` after the identifier.
The indices of an array start at zero.

For example:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers[2];
// => 3
```

To retrieve the number of elements that are in an array, use the `length` property:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.length;
// => 4
```

To change an element in the array, you assign a value at the index:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers[0] = 'one';
numbers;
// => ['one', 'two', 3, 'four']
```

## Methods

Some of the [methods][mdn-array] that are available on every Array object can be used to add or remove from the array.
Here are a few to consider when working on this exercise:

### push

A `value` can be _added_ to the end of an array by using `.push(value)`.
The method returns the new length of the array.

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.push(5); // => 5
numbers;
// => [1, 'two', 3, 'four', 5]
```

### pop

The _last_ `value` can be _removed_ from an array by using `.pop()`
The method returns the removed value.
The length of the array will be decreased because of this change.

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.pop(); // => four
numbers;
// => [1, 'two', 3]
```

### shift

The _first_ `value` can be _removed_ from an array by using `.shift()`
The method returns the removed value.
The length of the array will be decreased because of this change.

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.shift(); // => 1
numbers;
// => ['two', 3, 'four']
```

### unshift

A `value` can be _added_ to the beginning of an array by using `.unshift(value)`.
The method returns the new length of the array.

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.unshift('one'); // => 5
numbers;
// => ['one', 1, 'two', 3, 'four']
```

### splice

A `value` at a specific `index` can be _removed_ from an array by using `.splice(index, 1)`.
The method returns the removed element(s).

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']
```

<!-- prettier-ignore -->
~~~exercism/advanced
These methods are more powerful than described:

- Both `push` and `unshift` allow you to push or unshift multiple values at once, by adding more arguments.
  That is not necessary to complete this exercise.
- Splice can remove multiple values by increasing the second argument.
  That is not necessary to complete this exercise.
- Splice can also add multiple values by adding them as arguments after the `deleteCount`.
  This can be used to replace values, or insert values in the middle of an array (for example by removing 0 elements).
  That is not necessary to complete this exercise.
~~~

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
