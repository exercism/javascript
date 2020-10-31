When `...` appears on the right-hand side of an assignment, it's known as the `spread` operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.

```javascript
const oneToFive = [1, 2, 3, 4, 5]
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10]

oneToTen
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42]

woow
// =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]
```
