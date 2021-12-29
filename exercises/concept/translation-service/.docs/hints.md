# Hints

## 1. Fetch a translation, ignoring the quality

- Promises are chainable, for example by using `.then`.
- Promises will forward any value.
  That means that if a promise resolves, it will forward that value until it reaches the end of the chain or a `.then`, which receives the value as its argument.
- Promises will forward any error.
  That means that if a promise rejects, it will forward that rejection until it reaches the end of the chain or a `.catch`, which receives the value as its argument and can handle it.

## 2. Fetch a batch of translations, all-or-nothing

- To return a promise with an error, create a `Promise` that is `rejected` from the start.
- There is a helper method on `Promise` that waits for an array of promises to resolve before it resolves itself.

## 3. Request a translation, retrying at most 2 times

- Convert the `callback` to a promise using the `new Promise` constructor.

## 4. Fetch a translation, inspect the quality, or request it

- Instead of nesting `.then` and/or `.catch`, `.then` takes a second argument which catches everything _before_ (earlier in the chain), ignoring errors in the first argument of `.then`.
