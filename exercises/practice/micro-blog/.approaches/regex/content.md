# Regex

```javascript
let string = '👨‍👨‍👧‍👧💜🤧🤒🏥😀';
let string2 = 'The quick brown fox jumps over the lazy dog. It barked.';

const splitWithRegEx = (s) => s.match(/.{0,5}/gu)[0];

console.log(splitWithRegEx(string)); // will be "👨‍👨‍👧" - incorrect
console.log(splitWithIterator(string2)) // will be "‍The q"
```

This solution:
* Uses the [String.match() method][match] with a supplied RegEx
    * The RegEx supplied matches any character `.`, between 0 and 5 times `{0, 5}`. The `u` flag enables Unicode support.
    * This matches characters by code points as well.
* Then it returns the first match as the output string.

[match]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match