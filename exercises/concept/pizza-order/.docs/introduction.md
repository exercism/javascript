# Introduction

The ability for something to be defined in terms of itself is called recursion. Recursive functions are functions that call themselves.

Suppose that you have a function called `recurse`. This function is recursive if it calls itself inside its body, like this:

```js
function recurse() {
  // ...
  recurse();
  // ...
}
```

A recursive function should always have a condition to stop calling itself and return a value, known as a _base case_. Otherwise, it will call itself indefinitely. In the absence of a base case, or when a function calls itself too many times (the number varies per the compiler), a `Maximum call stack size exceeded` error will be raised.

```js
function recurse() {
  if (baseCondition) {
    // stop calling itself
    //...
  } else {
    recurse();
  }
}
```

Recursive functions often can be used instead of `for` loops for more succinct code. For example, take a countdown.
Here's the more intuitive `for` loop approach:

```js
function countDown(fromNumber) {
  for (let i = fromNumber; i > 0; i--) {
    console.log(i);
  }
}

countDown(3); // 3, 2, 1 in separate lines
```

We could solve this using recursion too:

```js
function countDown(fromNumber) {
  console.log(fromNumber);
  if (fromNumber > 1) {
    countDown(fromNumber - 1);
  }
}

countDown(3); // same result
```

Here, our base case is when `fromNumber` is 1, in which case we don't call `countDown` again.

Apart from just displaying numbers, recursive functions can be used for more complicated procedures, such as keeping a sum or total.

```js
function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

sum(3); // 6
```
