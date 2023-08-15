# Hints

## General

- Callback functions are functions passed as an argument to a calling function.
- Callback functions must meet the specification of the calling function.

## 1. Try to notify with a successful message

- Use the imported API function `notify` in your function.
- Pass an object to `notify`. It should have a property of `message`. Think about what the message value should be.
- Pay attention to the JSDoc type hint -- the function should not return a value.

## 2. Try to notify with an error message

- Use the imported API function `notify` in your function.
- Pass another object to `notify`. It should have a property of `message`. The message value should differ from the last part.
- Return the result from the `notify` API function.

## 3. Create a callback to buy fruit if the inventory is available

- Use the already imported `order` function.
- Since we are working on a wrapper think about whether we really need to return anything this time.
- Cover both the chance of a successful outcome and a failed one by including the two callback functions.

## 4. Refactor your awesome work so far into a more concise function

- Reuse the function from the previous task.
- Try to think of a way to package variety and quantity together when they are passed to `orderFromGrocer`.
