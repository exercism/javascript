# About

Javascript has a built-in operator that makes it easier to work with indefinite numbers of elements.

## Rest elements

When `...` appears on the left-hand side of an assignment, those three dots are known as the `rest` operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.

```javascript
const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

a;
// => 0
b;
// => 1
everythingElse;
// => [1, 2, 3, 5, 8]
```

Note that in JavaScript, unlike some other languages, a `rest` element cannot have a trailing comma. It _must_ be the last element in a destructuring assignment. The example below throws a `SyntaxError`:

```javascript
const [...items, last] = [2, 4, 8, 16]
```

## Spread elements

When `...` appears on the right-hand side of an assignment, it's known as the `spread` operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.

```javascript
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

oneToTen;
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];

woow;
// =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]
```

## Rest parameters

TODO
