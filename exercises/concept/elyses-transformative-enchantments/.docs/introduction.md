In Javascript, the `Array` class has many powerful built-in functions for transforming arrays. These functions make it much easier to do things than it otherwise would be using a simple for loop or more direct manipulation.

Example of transformation using a for loop and second array:

```javascript
const numbers = [1, 2, 3]
const result = []
for (let i = 0; i < numbers.length; i++) {
  result[i] = numbers[i] + 5
}
result
// => [6, 7, 8]
```

Example of transformation using a built-in method:

```javascript
const numbers = [1, 2, 3]
numbers.map((n) => n + 5)
// => [6, 7, 8]
```
