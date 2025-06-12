# Introduction

The [`Promise`][promise-docs] object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

<!-- prettier-ignore -->
~~~exercism/note
This is a hard topic for many people, specially if you know programming in a language that is completely _synchronous_.
If you feel overwhelmed, or you would like to learn more about **concurrency** and **parallelism**, [watch (via go.dev)][talk-blog] or [watch directly via vimeo][talk-video] and [read the slides][talk-slides] of the brilliant talk "Concurrency is not parallelism".

[talk-slides]: https://go.dev/talks/2012/waza.slide#1
[talk-blog]: https://go.dev/blog/waza-talk
[talk-video]: https://vimeo.com/49718712
~~~

## Lifecycle of a promise

A `Promise` has three states:

1. pending
2. fulfilled
3. rejected

When it is created, a promise is pending.
At some point in the future it may _resolve_ or _reject_.
Once a promise is resolved or rejected once, it can never be resolved or rejected again, nor can its state change.

In other words:

1. When pending, a promise:
   - may transition to either the fulfilled or rejected state.
2. When fulfilled, a promise:
   - must not transition to any other state.
   - must have a value, which must not change.
3. When rejected, a promise:
   - must not transition to any other state.
   - must have a reason, which must not change.

## Resolving a promise

A promise may be resolved in various ways:

```javascript
// Creates a promise that is immediately resolved
Promise.resolve(value);

// Creates a promise that is immediately resolved
new Promise((resolve) => {
  resolve(value);
});

// Chaining a promise leads to a resolved promise
somePromise.then(() => {
  // ...
  return value;
});
```

In the examples above `value` can be _anything_, including an error, `undefined`, `null` or another promise.
Usually you want to resolve with a value that's not an error.

## Rejecting a promise

A promise may be rejected in various ways:

```javascript
// Creates a promise that is immediately rejected
Promise.reject(reason)

// Creates a promise that is immediately rejected
new Promise((_, reject) {
  reject(reason)
})

// Chaining a promise with an error leads to a rejected promise
somePromise.then(() => {
  // ...
  throw reason
})
```

In the examples above `reason` can be _anything_, including an error, `undefined` or `null`.
Usually you want to reject with an error.

## Chaining a promise

A promise may be _continued_ with a future action once it resolves or rejects.

- [`promise.then()`][promise-then] is called once `promise` resolves
- [`promise.catch()`][promise-catch] is called once `promise` rejects
- [`promise.finally()`][promise-finally] is called once `promise` either resolves or rejects

### **then**

Every promise is "thenable".
That means that there is a function `then` available that will be executed once the original promise is resolves.
Given `promise.then(onResolved)`, the callback `onResolved` receives the value the original promise was resolved with.
This will always return a _new_ "chained" promise.

Returning a `value` from `then` resolves the "chained" promise.
Throwing a `reason` in `then` rejects the "chained" promise.

```javascript
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

const promise2 = promise1.then(function (value) {
  console.log(value);
  // expected output: "Success!"

  return true;
});
```

This will log `"Success!"` after approximately 1000 ms.
The state & value of `promise1` will be `resolved` and `"Success!"`.
The state & value of `promise2` will be `resolved` and `true`.

There is a second argument available that runs when the original promise rejects.
Given `promise.then(onResolved, onRejected)`, the callback `onResolved` receives the value the original promise was resolved with, or the callback `onRejected` receives the reason the promise was rejected.

```javascript
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);

  if (Math.random() < 0.5) {
    reject('Nope!');
  }
});

function log(value) {
  console.log(value);
  return true;
}

function shout(reason) {
  console.error(reason.toUpperCase());
  return false;
}

const promise2 = promise1.then(log, shout);
```

- In about 1/2 of the cases, this will log `"Success!"` after approximately 1000 ms.
  - The state & value of `promise1` will be `resolved` and `"Success!"`.
  - The state & value of `promise2` will be `resolved` and `true`.
- In about 1/2 of the cases, this will immediately log `"NOPE!"`.
  - The state & value of `promise1` will be `rejected` and `Nope!`.
  - The state & value of `promise2` will be `resolved` and `false`.

It is important to understand that because of the rules of the lifecycle, when it `reject`s, the `resolve` that comes in ~1000ms later is silently ignored, as the internal state cannot change once it has rejected or resolved.
It is important to understand that returning a value from a promise resolves it, and throwing a value rejects it.
When `promise1` resolves and there is a chained `onResolved`: `then(onResolved)`, then that follow-up is a new promise that can resolve or reject.
When `promise1` rejects but there is a chained `onRejected`: `then(, onRejected)`, then that follow-up is a new promise that can resolve or reject.

### **catch**

Sometimes you want to capture errors and only continue when the original promise `reject`s.
Given `promise.catch(onCatch)`, the callback `onCatch` receives the reason the original promise was rejected.
This will always return a _new_ "chained" promise.

Returning a `value` from `catch` resolves the "chained" promise.
Throwing a `reason` in `catch` rejects the "chained" promise.

```javascript
const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);

  if (Math.random() < 0.5) {
    reject('Nope!');
  }
});

function log(value) {
  console.log(value);
  return 'done';
}

function recover(reason) {
  console.error(reason.toUpperCase());
  return 42;
}

const promise2 = promise1.catch(recover).then(log);
```

In about 1/2 of the cases, this will log `"Success!"` after approximately 1000 ms.
In the other 1/2 of the cases, this will immediately log `42`.

- If `promise1` resolves, `catch` is skipped and it reaches `then`, and logs the value.
  - The state & value of `promise1` will be `resolved` and `"Success!"`.
  - The state & value of `promise2` will be `resolved` and `"done"`;
- If `promise1` rejects, `catch` is executed, which _returns a value_, and thus the chain is now `resolved`, and it reaches `then`, and logs the value.
  - The state & value of `promise1` will be `rejected` and `"Nope!"`.
  - The state & value of `promise2` will be `resolved` and `"done"`;

### **finally**

Sometimes you want to execute code after a promise settles, regardless if the promise resolves or rejects.
Given `promise.finally(onSettled)`, the callback `onSettled` receives nothing.
This will always return a _new_ "chained" promise.

Returning a `value` from `finally` copies the status & value from the original promise, ignoring the `value`.
Throwing a `reason` in `finally` rejects the "chained" promise, overwriting any status & value or reason from the original promise.

## Example

Various of the methods together:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  const sampleData = [2, 4, 6, 8];
  const randomNumber = Math.round(Math.random() * 5);

  if (sampleData[randomNumber]) {
    resolve(sampleData[randomNumber]);
  } else {
    reject('Sampling did not result in a sample');
  }
});

const finalPromise = myPromise
  .then(function (sampled) {
    // If the random number was 0, 1, 2, or 3, this will be
    // reached and the number 2, 4, 6, or 8 will be logged.
    console.log(`Sampled data: ${sampled}`);
    return 'yay';
  })
  .catch(function (reason) {
    // If the random number was 4 or 5, this will be reached and
    // reason will be "An error occurred". The entire chain will
    // then reject with an Error with the reason as message.
    throw new Error(reason);
  })
  .finally(function () {
    // This will always log after either the sampled data is
    // logged or the error is raised.
    console.log('Promise completed');
  });
```

- In the cases `randomNumber` is `0-3`:
  - `myPromise` will be resolved with the value `2, 4, 6, or 8`
  - `finalPromise` will be resolved with the value `'yay'`
  - There will be two logs:
    - `Sampled data: ...`
    - `Promise completed`
- In the cases `randomNumber` is `4-5`:
  - `myPromise` will be rejected with the reason `'Sampling did not result in a sample'`
  - `finalPromise` will be rejected with the reason `Error('Sampling did not result in a sample')`
  - There will be one log:
    - `Promise completed`
    - _in some environments_ this will yield an `"uncaught rejected promise: Error('Sampling did not result in a sample')"` log

As shown above, `reject` works with a string, and a promise can also reject with an `Error`.

<!-- prettier-ignore -->
~~~exercism/note
If chaining promises or general usage is unclear, the [tutorial on MDN][mdn-promises] is a good resource to consume.

[mdn-promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
~~~

[promise-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[promise-catch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
[promise-then]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[promise-finally]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
