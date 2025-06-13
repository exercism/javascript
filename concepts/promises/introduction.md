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

## Chaining promises

In JavaScript, there are various methods to chain promises.
Calling a chaining method on a promise returns another promise.

<!-- prettier-ignore -->
~~~exercism/note
The [tutorial on MDN][mdn-promises] is a good resource to consume if you want to learn more about promises before completing the concept exercise.

[mdn-promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
~~~

[promise-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
