[_Callbacks_ describe the pattern][wiki-callbacks] where a function receives a function as an argument to invoke when it arrives at a condition. The condition may be that its own work is done, or that an event has occurred, or that some predicate passes. It can be synchronous; it can be asynchronous.

This is a useful pattern in JavaScript because it is designed as a single-threaded runtime where only one function call can be executed at a time. During execution, the runtime cannot respond to other events or continue execution until the function has returned. You might have noticed this on website when they seem to "freeze" or become unresponsive.

But many API calls (often I/O functions, timers, and event listeners) use an asynchronous mechanism to place the [current function call][mdn-concurrency-stack] on the side until the work is complete. Upon completion, a callback function is placed on the [message queue][mdn-concurrency-queue] so that when the runtime is in between function calls, the messages are then processed by invoking the callback function.

It is also useful when the `callback` (the argument passed in) may not be defined (created) at the calling site. In other words: it may have been passed down from a different place in the program.

If the `callback` function _returns_ a boolean or boolean-like value, which is intended to be used (as opposed to a throwaway return value), it's called a predicate.

## Synchronous Code

A synchronous call is when one function is executed after the other. The order is fixed.

```javascript
function triangleArea(height, base) {
  return (height * base) / 2
}

triangleArea(2, 10) // => 10
triangleArea(40, 3) // => 60
```

## Asynchronous Code

When an asynchronous function is invoked, there is no way to know for certain when it will finish its work. This means there is no value to act on when the function returns to the caller.

```javascript
// This is broken, it may or may not return your value in time to be used
let area = asynchronousTriangleArea(4, 7)
console.log(area)
```

So we can use callbacks to control the order of execution:

```javascript
function areaCallback(area) {
  console.log(area)
}

function asynchronousTriangleArea(height, base, areaCallback) {
  areaCallback((height * base) / 2)
}

// This outputs the area of the triangle to the console as expected.
asynchronousCallback(4, 7, areaCallback)
```

## Specific callback forms

### Browser Events

_Event handlers_ are a common use case for callbacks in JavaScript. This often takes the form of browser events like `'onload'` or `'onclick'`, where a DOM object's `addEventListener` method then registers a callback to be invoked when a specified event occurs.

```javascript
document.addEventListener('onload' () => alert('The webpage has now been loaded'))
```

### Node.js Error Convention

In [Node.js][nodejs], [callbacks][node-callbacks] often follow a [similar convention][node-error-convention] for their arguments: The first argument receives an `Error` object or `null` if no error occurred, and the second and subsequent receive the data that the calling function is designed to send.

If an error occurs, the second and subsequent arguments may not be present, so don't depend on them.

```javascript
function operation(a, b, callback) {
  // Work ...

  if (/* an error occurs */) {
    return callback(new Error('An error occurred'))
  }

  // On success:
  callback(null, data)
}

function callback(error, returnedData) {
  if (error) {
    // An error occured, handle it here.
    return
  }

  // No error occurred, continue on with the returned data.
}

operation(1, 2, callback)
```

You see this pattern often when dealing with asynchronous functions.

[mdn-callbacks]: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
[mdn-concurrency-stack]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#stack
[mdn-concurrency-queue]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#queue
[nodejs]: https://www.nodejs.org
[node-callbacks]: https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/
[node-error-convention]: https://nodejs.org/en/knowledge/errors/what-are-the-error-conventions/
[wiki-callbacks]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
