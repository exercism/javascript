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
- If input length is greater than 100, or less than 10, throw a `RangeError`
- If input contains a mix of letters and numbers, throw a `SyntaxError`.
- Otherwise, return the input in `uppercase`.

*Don't forget to attach appropriate error messages then you throw! An informative and well structured error message can save you hours of debugging.*

Inside the `catch` block:
- log the error's message using `console.log`
- `throw` the `error` so it can be tested for its type.
