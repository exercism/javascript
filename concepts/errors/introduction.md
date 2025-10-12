# Introduction

Errors are useful to report when something is wrong or unexpected in a program or a piece of code.

They are JavaScript objects.

The main property of this object is `message`:

```javascript
const error = new Error('Oops, something went wrong');

console.log(error.message);
// => "Oops, something went wrong"
```

Using the `throw` syntax, you can throw an Error.

```javascript
throw new Error('Oops');
```

When an `Error` is thrown, the current execution is stopped and resumes in the first catch block of the call stack.

```javascript
try {
  throw new Error('Oops');
} catch (error) {
  console.log(error.message);
  // => "Oops"
}
```

As with any class in JavaScript, subclasses can inherit from `Error` to create Custom errors by using the `extends` keyword.
The `instanceof` syntax will check if the error caught is an instance of a particular subclass of `Error`.

```javascript
class CustomError extends Error {}

try {
  // ... Code that may throw an error
} catch (error) {
  if (error instanceof CustomError) {
    console.log('The error thrown is an instance of the CustomError');
  }
}
```
