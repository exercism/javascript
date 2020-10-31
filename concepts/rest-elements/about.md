Javascript has a built-in operator that makes it easier to work with indefinite numbers of elements. When `...` appears on the left-hand side of an assignment, those three dots are known as the `rest` operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.

```javascript
const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8]

a
// => 0
b
// => 1
everythingElse
// => [1, 2, 3, 5, 8]
```

Note that in JavaScript, unlike some other languages, a `rest` element cannot have a trailing comma. It _must_ be the last element in a destructuring assignment. The example below throws a `SyntaxError`:

```javascript
const [...items, last] = [2, 4, 8, 16]
```
