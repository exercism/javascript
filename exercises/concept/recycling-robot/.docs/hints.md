# Hints


## 1. Check if a value is a boolean

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.

## 2. Check if a value is a number.

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You need to check for `Infinity` and `NaN`.
- `NaN` is never equal to itself, but there is a [built in function][isNaN] to check if a value is NaN.

## 3. Check if a value is an object

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You will need to check for `null`.

## 4. Check if a string is numeric

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You can iterate over a string to check if all characters are digits.

## 5. Check if an object is electronic

- You can use `instanceof` to check if an object is an instance of a class or one of its children.

## 6. Check if a value is a non empty array

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You can check the length of an array to find out how many elements it contains.

## 7. Check if a value is an empty array

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You can check the length of an array to find out how many elements it contains.

## 8. Throw an error if an object does not have the `id` property or method

- You can use the `in` operator to check if an object has a property or method.
- If the `id` property or method is missing, your function should throw an `Error`.

## 9. Check if an object has a `type` property or method

- You can use the `in` operator to check if an object has a property or method.

## 10. Check if an object has an `id` property

- To check if an object has a property (not a method), you can use the `Object.hasOwn()` function.

## 11. Check if an object has a defined `type` property

- To check if an object has a property (not a method), you can use the `Object.hasOwn()` function.
- You will have to access the `type` property and check if it is defined.

[isNaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
