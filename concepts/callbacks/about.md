# About

[_Callback_ functions][wiki-callbacks] are functions passed as arguments to other functions. The callback function may then be invoked to trigger a subsequent action. Often, _callbacks_ are used to handle the results of work done, or handle an action when an event occurs. _Callback_ functions can be used in synchronous and asynchronous programming.

```javascript
const sideLength = 5;

// Caller function takes a callback function
function applySideLength(callback) {
  return callback(sideLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(side) {
  return side * side;
}

applySideLength(areaOfSquare); // => 25
```

You may also write callbacks as a function expression:

```javascript
applySideLength(function squarePerimeter(side) {
  return side * 4;
});
```

This is a useful pattern in JavaScript because JavaScript is designed as a single-threaded runtime where only one function call can be executed at a time. During execution, the runtime cannot respond to other events or continue execution until the function has returned.

Many API calls (I/O functions, timers, and event listeners) use an asynchronous mechanism to place the [current function call][mdn-concurrency-stack] on the side until the work is complete. Upon completion, a callback function is placed on the [message queue][mdn-concurrency-queue] so that when the runtime is in between function calls, the messages are then processed by invoking the callback function.

It is also useful to use _callback functions_ because they may reference variables in its closure scope which are unavailable to the function where it is later invoked.

## Specific examples of callback functions

### Event Handlers

_Event handlers_ are a common use-case for callbacks in JavaScript. Browser events like `'onload'` or `'onclick'` are signals which can trigger functions to be invoked. A DOM [[Document Object Model](mdn-dom) object's `addEventListener` method registers a callback function to be invoked when it "hears" that an event has occurred.

```javascript
document.addEventListener('onload', function () {
  alert('The webpage has now been loaded');
});
```

### Node.js Convention

In [Node.js][nodejs], [callback functions][node-callbacks] follow a [convention][node-error-convention] to control the flow of a program. They follow this pattern: the first argument of the callback function may receive an `Error` or `null`; The second and subsequent arguments receive the data that the calling function is designed to send.

If an error occurs, the second and subsequent arguments may not be present, so you may not depend on them to be present.

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
    // An error occurred, handle it here.
    return
  }

  // No error occurred, continue with the returned data.
}

operation(1, 2, callback)
```

You see this pattern often when dealing with asynchronous functions to assist with control flow.

### Callbacks in disguise

Common `Array` functions use callback functions to define their behaviour:

- `Array.prototype.forEach`:

  - Accepts a callback, which applies the callback to each element of an array.

    ```javascript
    [1, 2, 3].forEach(function (element) {
      doSomething(element);
    });
    // => doSomething() is invoked 3 times, once with each element
    ```

- `Array.prototype.map`

  - Accepts a callback, which applies the callback to each element of an array using the result to create a new array.

    ```javascript
    [1, 2, 3].map(function (element) {
      return element + 1;
    });
    // => [2, 3, 4]
    ```

- `Array.prototype.reduce`

  - Accepts a callback, which applies the callback to each element of an array, passing the result forward to the next invocation.

    ```javascript
    [1, 2, 3].reduce(function (runningSum, element) {
      return runningSum + element;
    }, 0);
    // => 6
    ```

[mdn-callbacks]: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
[mdn-concurrency-stack]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#stack
[mdn-concurrency-queue]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#queue
[mdn-dom]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[nodejs]: https://www.nodejs.org
[node-callbacks]: https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/
[node-error-convention]: https://nodejs.org/en/knowledge/errors/what-are-the-error-conventions/
[wiki-callbacks]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
