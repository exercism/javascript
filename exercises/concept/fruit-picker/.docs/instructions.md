# Instructions

You are creating a new online portal for your patrons to order their fruit fresh from the grocer. The grocer has an API that you can use to see if they have the inventory desired by your customers. You need to create a small library of functions for interacting with the grocer's API.

## 1. Check if the grocer's service is online

The grocer's application programming interface [API] provides a function to check if their service is online called `checkStatus`. Use the grocer's function to finish the implementation of your `isServiceOnline` function. The `checkStatus` function takes a callback function to receive the status from the API.

- if the status is `'ONLINE'`, return `true`
- if the status is `'OFFLINE'`, return `false`

```javascript
isServiceOnline();
// => true or false
```

## 2. See if the grocer has some fruit

The grocer's API provides a function to query their inventory called `checkInventory`. It receives two arguments: a _query_, and a _callback_ function.

The query takes the form of an _object_:

```typescript
const query = {
  variety: string,
  quantity: number,
};
```

For your `pickFruit` function, you have decided to generalize it and just pass along a callback. So using the arguments `variety` and `quantity` finish the function to call the `checkInventory` API.

```javascript
function action(err, data) {
  // logic
}

pickFruit('pineapple', 20, action);
// calls the checkInventory function with the query and passing along the `action` callback function
```

## 3. Create a callback to buy fruit if the inventory is available

Finish the `purchaseInventoryIfAvailable` callback function to be used with the grocer's `checkInventory` API function. The API function expects callback functions to accept two arguments, `err` and `isAvailable`. If an error occurs when checking the inventory, a string is returned to `err`. If there is no error, the value is `null`. `isAvailable` is a _boolean_ value, but if there is an error it is _undefined_.

To finish `purchaseInventoryIfAvailable`, throw a new error if `err` is not null. Otherwise, return `'PURCHASE'` if `isAvailable` is _true_ or `'NOOP'` if _false_.

```javascript
purchaseInventoryIfAvailable('Server Offline', undefined);
// => Throws new error "Server Offline"

purchaseInventoryIfAvailable(null, true);
// => 'PURCHASE'

purchaseInventoryIfAvailable(null, false);
// => 'NOOP'
```

## 4. Put it all together

You notice that you're using `pickFruit` and `purchaseInventoryIfAvailable` so you decide to DRY up your code by extracting the code into a separate function called `pickAndPurchaseFruit`. Reuse `pickFruit` and `purchaseInventoryIfAvailable` to finish this function.

```javascript
pickAndPurchaseFruit('Red Delicious Apples', 42);
// 'PURCHASE' if available or 'NOOP' if not available
```
