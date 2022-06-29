# Instructions

You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.

## 1. Create a callback to be called when the order is successful

Write a callback function called `onSuccess` to be called when the order is successful. It should invoke the imported `notify` function passing a success message to it.

```javascript
onSuccess();
// => `notify` called with `{ message: 'SUCCESS' }`
```

## 2. Create a callback to be called when the order fails with an error

Write a callback function called `onError` to be called when the order encounters an error. It should invoke the imported `notify` function passing an error message to it.

```javascript
onError();
// => `notify` called with `{ message: 'ERROR' }`
```

## 3. Create a wrapper to wrap the external api function

The grocer's API provides a function to order from their inventory called `order`. It receives three arguments: a _query_, a _callback_ function to be invoked when the order is successful, and a _callback_ function to be invoked when the order encounters an error. You decide to wrap the api function call in a newly defined function `orderFromGrocer` to insulate your codebase from external changes. Your function should forward the arguments (which match the provided api function) to the api function.

The query takes the form of an _object_:

```typescript
const query = {
  variety: string,
  quantity: number,
};
```

```javascript
orderFromGrocer(
  { variety: 'pear', quantity: 12 },
  exampleSuccessCallback,
  exampleErrorCallback
);
// => `order` was called with the query and the callbacks
```

## 4. Create a convenient short function

You find that you are calling this function from many different places with the same functions. Seeing an opportunity to refactor your code, you want to create a function where you can supply the variety and quantity to order as arguments.

```javascript
postOrder('peach', 100);
// => order submitted for 100 peaches
```
