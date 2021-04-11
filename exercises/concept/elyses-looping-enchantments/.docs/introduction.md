# Introduction

In JavaScript, arrays are used to store multiple values in a single variable!
These values can be of any type, and can even be of multiple types.
Arrays are also given lots of built-in methods, some of which can be used to loop over the values, giving access to a single one on each iteration.

Each of these built-in methods have a different use case, and differing syntaxes to go along with them.

Looping over an array using its prototype can be accomplished using `Array.prototype.forEach`.
`forEach` takes in two parameters: a callback function and a lexical context.
The callback is a function that is called every time the loop index is increased, and takes in three parameters: the current value, the current index, and the array as a whole.
The second parameter to `forEach` is useful when using this method in another prototypal context (which is out of scope for this exercise).

Note that because `forEach` doesn't directly expose the underlying `for` loops, the `break` statement cannot be used in the callback.

## Basic example of `Array.prototype.forEach`:

```javascript
const numbers = [1, 2, 3, 4, 6, 7, 8, 9];

// log the index of the value 7
numbers.forEach((currentValue, currentIndex) => {
  if (currentValue === 7) {
    console.log(currentIndex)
  }
});

```

The `.forEach` method takes a callback:
```javascript

function logLuckyIndex(value, index) {
  if (value === 7) {
    console.log(index)
  }
}

numbers.forEach(logLuckyIndex)
// Same result as the inline anonymous function

```

That callback receives (up to) three parameters:

- the value of the current iteration
- the index of the current iteration
- the entire array (self)

---

Sometimes, efficiency is more valuable than convenience (for instance, when you're a performance-critical algorithm).
In this case, `break`ing out of the loop at a given point might be preferable.
Although using `forEach` may not allow this, the conventional `for` loop does.


## Using a `for` loop to iterate over an `Array`

```js
const answers = [42, 42, 42];

for (let index = 0; index < answers.length; index++) {
  const currentValue = answers[index];

  // Recall that Arrays are 0-indexed. As such, get the current
  // element using the index.
  console.log(currentValue);
}
```

---

However, when only the _value_ is required and not the _index_, using a `for .. of` loop may be more suited for the task.

A `for .. of` loop is syntactical sugar that creates a regular `for` loop over an iterable objects.
It functions in the same way that a `for` loop does, but without directly exposing the current iteration index.

## Using a `for .. of` loop using `const`

```js
const numbers = [6.0221515, 10, 23];

// Because re-assigning number inside the loop will be very
// confusing, disallowing that via const is preferable.
for (const number of numbers) {
  console.log(number);
}

// Output:
// 6.0221515
// 10
// 23
```
