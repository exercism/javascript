# Error Handling

In this exercise, you will implement a function called `processString` that processes a given input string with proper error handling.

You will learn how to:

- Check input types and handle invalid inputs by throwing errors.
- Throw custom errors for specific cases (e.g., empty strings).
- Use a `try...finally` block to ensure certain code runs regardless of success or failure (such as cleanup or logging).
- Return the uppercase version of the string if it is valid.

Your function should:

- Throw a `TypeError` if the input is not a string.
- Throw an `Error` with the message `EmptyStringError` if the input string is empty.
- Return the uppercase form of the input string if valid.
- Use a `finally` block to log a cleanup message every time the function runs.

This exercise is a great way to practice writing robust functions that can gracefully handle unexpected inputs while always executing necessary cleanup logic.
