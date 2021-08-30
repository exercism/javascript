# Introduction

The [`Promise` object][mdn-promise] represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

> Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

A `Promise` has three states:

1. unresolved
2. resolved
3. rejected

When a `Promise` is _settled_, it means that it has either _resolved_ or _rejected_.

## Guarantees

Unlike old-fashioned _passed-in_ callbacks, a promise comes with some guarantees, including, but not limited to:

- A `Promise` can only change its state _once_, which means that a resolved promise can never become rejected.
- Callbacks added with [`.then`][mdn-promise-then] are called even if the promise has already settled.
- Multiple callback may be added using [`.then`][mdn-promise-then], and those callbacks will be invoked in the order as they were inserted.

## Chaining

> TODO: `.then`, `.catch`

## Constructing

> TODO: `Promise.resolve` `Promise.reject` `new Promise(resolve, reject)`

## More about promises

See [this guide][mdn-guide-promise] for more about using promises.

[mdn-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[mdn-promise-then]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[mdn-guide-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
