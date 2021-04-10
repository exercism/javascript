# Instructions

Given the basic `Promise`, implement the following functions:

- `promisify`: takes a callback that is turned into a function that returns a `Promise`
- `all`: takes an array of promises and resolves when _all_ of them are resolved, or rejects when _one_ of them rejects.
- `allSettled`: takes an array of promises and resolves when _all_ of them either resolve or reject.
- `race`: takes an array of promises and resolves or rejects with the value of the _first_ promise that resolves or rejects.
- `any`: takes an array of promises and resolves when _one_ of them resolves, or rejects when _all_ of them reject.

Do not use built-in `Promise` functions other than creating a `Promise`, `then` and `catch`.
