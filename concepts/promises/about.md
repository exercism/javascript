# About

The [Promise][promise-docs] object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

A Promise is in one of these states:

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled**: meaning that the operation was completed successfully.
- **rejected**: meaning that the operation failed.

When either of these options happens, the associated handlers queued up by a promise's `then` method is called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

The methods [`promise.then()`][promise-then], [`promise.catch()`][promise-catch], and [`promise.finally()`][promise-finally] are used to associate further action with a promise that becomes settled.

Example:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function (resolve, reject) {
    resolve("Jack");
  }, 300);
});

myPromise.then(function (e) {
  console.log(e); // expected output 'Jack'
});
```

## Methods

**all**

> The `Promise.all()` method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.[^1]

```javascript
var p1 = Promise.resolve(10);
var p2 = 45;
var p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Jill");
  }, 300);
});

Promise.all([p1, p2, p3]).then(functin (values) {
  console.log(values); // => [10, 45, "Jill"]
});
```

**reject**

> The `Promise.reject()` method returns a Promise object that is rejected with a given reason.[^2]

```javascript
Promise.reject(new Error("failed :(")).then(
  function () {
    // not called
  },
  function (error) {
    console.error(error); // error in the console
  }
);
```

**resolve**

> The `Promise.resolve()` method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.[^3]

```javascript
Promise.resolve("resolved!").then(
  function (value) {
    console.log(value); // "resolved!"
  },
  function (value) {
    // not called
  }
);
```

**The below methods belong to `Promise.prototype`**

**then**

> The `.then()` method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each `.then()` returns a newly generated promise object, which can optionally be used for chaining.[^4]

```javascript
const promise1 = new Promise(function (resolve, reject) {
  resolve("Success!");
});

promise1.then(function (value) {
  console.log(value);
  // expected output: "Success!"
});
```

**catch**

> A `.catch()` is really just a `.then()` without a slot for a callback function for the case when the promise is resolved. It is used to handle rejected promises.[^5]

```javascript
const promise1 = new Promise((resolve, reject) => {
  throw "An error occured";
});

promise1.catch(function (error) {
  console.error(error);
});
// expected output: An error occured
```

**finally**

> When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.[^6]

```javascript
function findDataById(id) {
  return new Promise(function (resolve, reject) {
    let sampleData = [1, 2, 3, 4, 5];
    if (sampleData[id]) {
      resolve(sampleData[id]);
    } else {
      reject(new Error("Invalid id"));
    }
  });
}

findDataById(4)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  })
  .finally(function () {
    console.log("Promise completed");
  });
```

---

[^1]: `all`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
[^2]: `reject`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
[^3]: `resolve`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
[^4]: `then`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[^5]: `catch`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
[^6]: `finally`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

[promise-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[promise-catch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
[promise-then]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[promise-finally]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
