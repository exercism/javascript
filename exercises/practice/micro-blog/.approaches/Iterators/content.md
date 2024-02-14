# Iterators

```javascript
let string = '👨‍👨‍👧‍👧💜🤧🤒🏥😀';
let string2 = 'The quick brown fox jumps over the lazy dog. It barked.';

const splitWithIterator = (s) => [...s].slice(0, 5).join('');

console.log(splitWithIterator(string)) // will be "👨‍👨‍👧" - incorrect
console.log(splitWithIterator(string2)) // will be "‍The q"
```

This solution:
* Uses [spread syntax][spread] to unpack the string into an array of its characters.
    * internaly, the spread operator works with iterators to separate the string by its code points.
* Then it separates the first 5 characters (code points).
* Finally, it joins them back into a string.

[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax