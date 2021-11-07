# Introduction

[Arrays][arrays-concept] have built-in [methods][mdn-array-methods] to analyse the contents of the array.
Many of the built-in functions that analyse the contents of an array, take a function that returns true or false as an argument. Such a function is called [`predicate`][predicate_in_programming].

The built-in methods are meant to be used _instead of a `for` loop_ or the built-in `forEach` method:

Example of analysis using a for loop :

```javascript
const numbers = [1, 'two', 3, 'four'];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === 'two') {
    return i;
  }
}
// => 1
```

Example of analysis using a built-in method:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two');
// => 1
```

Some other helpful built-in [methods][mdn-array-methods] that are available are shown below.

## `includes`

> The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. [^1]

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.includes(1);
// => true
numbers.includes('one');
// => false
```

## `every`

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. [^2]

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true
```

## `some`

> The some() method tests whether at least one element in the array passes the test implemented by the provided function. [^3]

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0);
// => true
```

## `find`

> The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. [^4]

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1
```

## `findIndex`

> The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. [^5]

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7);
// => 4
numbers.findIndex((num) => num > 9);
// => -1
```

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
[^2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[^3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
[^4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
[^5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

[predicate_in_programming]: https://derk-jan.com/2020/05/predicate/
[mdn-array-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
[arrays-concept]: /tracks/javascript/concepts/arrays
