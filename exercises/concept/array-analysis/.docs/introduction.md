In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, or even mixed types. The array elements can be accessed by their index. Arrays are also given a bunch of built-in methods. Some of these built-in methods can analyse the contents of the array. Many of the built-in functions that analyse the contents of an array, take a [`predicate`][predicate_in_programming] as argument.

The built-in functions are meant to be used _instead of a `for` loop_ or the built-in `Array#forEach()`:

Example of analysis using a for loop :

```javascript
const numbers = [1, 'two', 3, 'four']
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === 'two') {
    return i
  }
}
// => 1
```

Example of analysis using a built-in method:

```javascript
const numbers = [1, 'two', 3, 'four']
numbers.indexOf('two')
// => 1
```

[predicate_in_programming]: https://derk-jan.com/2020/05/predicate/
