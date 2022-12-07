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

Some of the [methods][array_methods] that are available on every Array object can be used to add or remove from the array.
Here are a few to consider when working on this exercise:

### push

> The `push()` method adds one or more elements to the end of an array and returns the new length of the array.[^1]

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.push(5); // => 5
numbers;
// => [1, 'two', 3, 'four', 5]
```

### pop

> The `pop()` method removes the last element from an array and returns that element.
> This method changes the length of the array.[^2]

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.pop(); // => four
numbers;
// => [1, 'two', 3]
```

### shift

> The `shift()` method removes the first element from an array and returns that removed element.
> This method changes the length of the array.[^3]

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.shift(); // => 1
numbers;
// => ['two', 3, 'four']
```

### unshift

> The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.[^4]

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.unshift('one'); // => 5
numbers;
// => ['one', 1, 'two', 3, 'four']
```

### splice

> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
> This method returns an array containing the deleted elements.[^5]

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']
```

---

[^1]: `push`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push (referenced September 29, 2021)
[^2]: `pop`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop (referenced September 29, 2021)
[^3]: `shift`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift (referenced September 29, 2021)
[^4]: `unshift`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift (referenced September 29, 2021)
[^5]: `splice`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice (referenced September 29, 2021)

[array_methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
