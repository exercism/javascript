# Instructions append

Due to the single-threaded nature of Javascript, code that appears to execute in parallel,
such as `async functions` or `Promise`, actually execute concurrently at most.
In fact, all code is executed synchronously even in `Promise` constructors, until control is passed back to the Event-Loop (the outermost function call ends).
Such solutions will pass all the tests, even though they do not meet the requirement for parallel or concurrent execution.

## Achieving concurrent execution for the exercise

To use concurrent execution to solve the exercise, you need to return from the function before executing the algorithm to solve the problem.
This can be acheived by using `setTimeout()` to "delay" execution of a `Promise` constructor:

```javascript
return new Promise((resolve) => {
  setTimeout(() => {
    // The code to run concurrently
    // Use `resolve()` to report the result
  }, 1);
});
```

## Concurency vs. Parallelism

Here's a quick definition for each that illustrates the diferences between the two:

- Concurrency is when two or more tasks can start, run and complete in overlapping time periods, being executed by the same processing unit.
- Parallelism is when two or more tasks can start and run at the same time, being executed independently of eachother by separate processing units.

## Parallelism in Javascript

Even though Javascript by default is single-threaded, there is a way to execute code non-concurently,
through the [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

As described by MDN:

> Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application.

Here's a simple demo (taken from [here](https://medium.com/@ns-tech-learn/what-is-a-web-worker-how-to-use-it-and-example-2273de521f04))

```js
// main.js
const myWorker = new Worker('worker.js');

myWorker.postMessage(5);

myWorker.onmessage = function (event) {
  console.log('Received result from worker:', event.data);
};
```

```js
// worker.js
onmessage = function (event) {
  console.log('Received number from main thread:', event.data);

  // Perform computation
  const result = event.data * 2;

  // Send result back to the main thread
  postMessage(result);
};
```

As a stretch goal, consider if your implementation can be adapted to make use of `Web workers`.
But beware, the Web worker API differs largely between browsers and other JavaScript environments.
Make sure you use the target environments documentation, which is Node.js LTS for this exercise.

---

## Further reading

- [MDN demo](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)
- [MDN - Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Article about multi-threading in JS](https://medium.com/techtrument/multithreading-javascript-46156179cf9a)
- [Web Worker primer](https://medium.com/@ns-tech-learn/what-is-a-web-worker-how-to-use-it-and-example-2273de521f04)
