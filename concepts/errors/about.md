# About

Errors are useful to report when something is wrong or unexpected in a program or a piece of code.

They are javascript objects.

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

When an Error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.

```javascript
try {
  throw new Error('Oops');
} catch (error) {
  console.log(error.message);
  // => "Oops"
}
```

As with any class in JavaScript, subclasses can inherit from `Error` to create Custom errors.

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

## Error Types

In addition to the `Error` object, other built-in error objects exist. You can learn more about it [here][error-types]

## Custom Errors

You can also define your own [Custom error Type][custom-error-type] by creating a class that extends one of the built-ins Error Types

```javascript
class MyCustomError extends Error {}
```

## Throwing non errors

While the syntax `throw` is usually used to throw an Error object, JavaScript is flexible and will let you throw a `string`, a `null` or any primitive type.

## Error stacktraces

While this is not standard in JavaScript, most of the JavaScript environments implement a [`stack`][error-stack] property on the Error objects, allowing you to get the stack trace of the error that was thrown.

[error-types]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types
[custom-error-type]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
[error-stack]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack
