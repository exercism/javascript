# About

When working with arrays, you sometimes want to execute code for each value in the array.
This is called iterating or looping over the array.

Here we will look at the case where you do not want to modify the array in the process.
For transforming arrays, see [Concept Array Transformations][concept-array-transformations] instead.

## The `for` Loop

The most basic and usually very performant way to iterate over an array is to use a `for` loop, see [Concept For Loops][concept-for-loops].

```javascript
const numbers = [6.0221515, 10, 23];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// => 6.0221515
// => 10
// => 23
```

## The `for...of` Loop

When you want to work with the value directly in each iteration and do not require the index at all, you can use a `for .. of` loop.

`for...of` works like the basic `for` loop shown above, but instead of having to deal with the _index_ as variable in the loop, you are provided with the _value_ directly.

```javascript
const numbers = [6.0221515, 10, 23];

// Because re-assigning number inside the loop will be very
// confusing, disallowing that via const is preferable.
for (const number of numbers) {
  console.log(number);
}
// => 6.0221515
// => 10
// => 23
```

Just like in regular `for` loops, you can use `continue` to stop the current iteration and `break` to stop the execution of the loop entirely.

JavaScript also has a `for...in` loop to iterate over keys in an object.
It is important to note that `for...of` and `for...in` are not interchangeable, see [MDN documentation][mdn-for-in-for-of] for details on this.

## The `forEach` Method

Every array includes a `forEach` method that can also be used to loop over the elements in the array.

`forEach` accepts a [callback][concept-callbacks] as a parameter.
The callback function is called once for each element in the array.

```javascript
const numbers = [6.0221515, 10, 23];

numbers.forEach((number) => console.log(number));
// => 6.0221515
// => 10
// => 23
```

In the example above the callback only uses the current element as a parameter.
If needed, the callback can make use of up to three parameters.

- the _value_ of the current iteration
- the _index_ of the current iteration
- the entire _array_

```javascript
const numbers = [6.0221515, 10, 23];

function callback(number, index, fullArray) {
  console.log(number, index, fullArray);
}

numbers.forEach(callback);
// => 6.0221515 0 [ 6.0221515, 10, 23 ]
// => 10 1 [ 6.0221515, 10, 23 ]
// => 23 2 [ 6.0221515, 10, 23 ]
```

Besides the callback, `forEach` accepts the `this` context to use for the iteration as an optional second parameter.
You can see an example in the ["Using thisArg" section on MDN][mdn-foreach-thisarg].

There are a couple of things you should keep in mind when working with `forEach`.

- There is no way to stop the iteration once the `forEach` loop has started.
  The statements `break` and `continue` do not exist it this context.
- `forEach` behaves weirdly if you modify the array after starting the loop.
  Elements you add to the end will be ignored, removing elements can lead to others being skipped, etc.
  To avoid these kinds of issues, never modify the underlying array in the callback.
- The return value of the `forEach` method itself is `undefined`.
  Because of that, you cannot chain any other array methods at the end.
- If you need to optimize your code for performance, you should consider using `for` or `for...of` instead as both are around three times faster.

[concept-array-transformations]: /tracks/javascript/concepts/array-transformations
[concept-for-loops]: /tracks/javascript/concepts/for-loops
[concept-callbacks]: /tracks/javascript/concepts/callbacks
[mdn-foreach-thisarg]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#using_thisarg
[mdn-for-in-for-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in
