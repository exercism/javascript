# Introduction

The [`Promise`][promise-docs] object represents the eventual completion (or failure) of an
asynchronous operation and its resulting value.

The methods [`promise.then()`][promise-then], [`promise.catch()`][promise-catch], and [`promise.finally()`][promise-finally] are used to associate further action with a promise that becomes settled.

For example:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  let sampleData = [2, 4, 6, 8];
  let randomNumber = Math.ceil(Math.random() * 5);
  if (sampleData[randomNumber]) {
    resolve(sampleData[randomNumber]);
  } else {
    reject('An error occured!');
  }
});

myPromise
  .then(function (e) {
    console.log(e);
  })
  .catch(function (error) {
    throw new Error(error);
  })
  .finally(function () {
    console.log('Promise completed');
  });
```

## Methods

These methods are available on `Promise.prototype`

**then**

> The `.then()` method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each `.then()` returns a newly generated promise object, which can optionally be used for chaining.[^1]

```javascript
const promise1 = new Promise(function (resolve, reject) {
  resolve('Success!');
});

promise1.then(function (value) {
  console.log(value);
  // expected output: "Success!"
});
```

**catch**

> A `.catch()` is just a `.then()` without a slot for a callback function for the case when the promise is resolved. It is used to handle rejected promises.[^2]

```javascript
const promise1 = new Promise((resolve, reject) => {
  throw 'An error occured';
});

promise1.catch(function (error) {
  console.error(error);
});
// expected output: An error occured
```

**finally**

> When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.[^3]

```javascript
function findDataById(id) {
  return new Promise(function (resolve, reject) {
    let sampleData = [1, 2, 3, 4, 5];
    if (sampleData[id]) {
      resolve(sampleData[id]);
    } else {
      reject(new Error('Invalid id'));
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
    console.log('Promise completed');
  });
```

---

[^1]: `then`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[^2]: `catch`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
[^3]: `finally`, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

[promise-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[promise-catch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
[promise-then]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[promise-finally]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
