# Introduction

In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, or even mixed types. The array elements can be accessed by their index, starting at 0.
Arrays are also given a bunch of built-in methods. Some of these built-in methods can analyse the contents of the array. Many of the built-in functions that analyse the contents of an array, take a [`predicate`][predicate_in_programming] as argument.

The built-in functions are meant to be used _instead of a `for` loop_ or the built-in `Array#forEach()`:

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

Some other helpful built-in methods that are available on the `Array.prototype`:

## `includes`

> The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. - MDN

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.includes(1);
// => true
numbers.includes('one');
// => false
```

## `every`

> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. - MDN

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true
```

## `some`

> The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. - MDN

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0);
// => true
```

## `find`

> The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. - MDN

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1
```

## `findIndex`

> The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7);
// => 4
numbers.findIndex((num) => num > 9);
// => -1
```

[predicate_in_programming]: https://derk-jan.com/2020/05/predicate/
