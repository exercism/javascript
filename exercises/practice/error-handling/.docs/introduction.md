# Error Handling

In this exercise, you will implement a function called `processString` that processes a given input string with proper error handling.

You will learn how to:

- Check input types and throw errors for invalid inputs.
- Throw errors for specific cases (e.g., empty strings).
- Return the uppercase version of the string if it is valid.
- Handle and catch errors using a try..catch block


Implement the processString function using a `try…catch` block.

Inside the `try` block:

- If the input is not a string, throw a `TypeError`.

- If the input is an empty string, return `null`.

- If input length is greater than 100, throw `Error`.

- If input length is less than 10, throw `Error`.

- If input contains a mix of letters and numbers, throw `Error`.

- Otherwise, return the input in `uppercase`.

Inside the `catch` block:
- console log the `error` message
- `throw` the `error` so it can be tested for its type.