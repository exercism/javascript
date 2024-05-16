# Instructions

You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.

## 1. Notify your customer when their order was successful

The portal should notify your customer if their order was successful. Define the `onSuccess` callback function that will be called if the order was successful due to the grocer having enough fruit in stock. This function should invoke the imported `notify` function, passing `{ message: 'SUCCESS' }` to let your customer know that their order was successful.

```javascript
onSuccess();
// => `notify` called with `{ message: 'SUCCESS' }`
```

## 2. Notify your customer when their order was unsuccessful

The portal should notify your customer if their order was unsuccessful. Define the `onError` callback function that will be called if the order was unsuccessful because the grocer _does not have_ the fruit in stock or there was an error. This function should invoke the imported `notify` function, passing `{ message: 'ERROR' }` to let your customer know that their order was unsuccessful.

```javascript
onError();
// => `notify` called with `{ message: 'ERROR' }`
```

## 3. Create an API wrapper to wrap the grocer's API order function

Fruit orders are placed through the grocer's API via the provided `order` function. This function receives three arguments: a _query_, containing the `variety` and `quantity` of fruit requested, a _callback_ function to be invoked when the order is successful, and a _callback_ function to be invoked when the order encounters an error.

You want to insulate your codebase from potential external changes and decide to wrap the call to the `order` function inside a new function named `orderFromGrocer`. Implement the `orderFromGrocer` function that attempts to place an order via a call to the grocer's API `order` function, making sure to forward the arguments passed into `orderFromGrocer` to the API call.

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

## 4. Simplify handling placed orders

Your customers are now able to place fruit orders via your portal, however, you notice that you are invoking the `orderFromGrocer` function in many different places across your codebase, each time having to pass in a `query` and the two `callback` functions as arguments. Seeing an opportunity to refactor your code, you think it would be simpler if you could place an order by just passing the `variety` and `quantity` of fruit required. Define the `postOrder` helper function that takes `variety` and `quantity` as arguments and attempts to place an order with the grocer.

```javascript
postOrder('peach', 100);
// => order placed for 100 peaches
```
