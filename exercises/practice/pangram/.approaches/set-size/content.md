# `Set` with `size`

```javascript
export function isPangram(input) {
  return new Set(input.toLowerCase().match(/[a-z]/g)).size === 26;
}
```

This approach creates a [`Set`][set] of the unique letters in the `input` and tests its [size][size] to determine the result.

- It first creates a new `Set` made from the [lowercased][tolowercase] characters of the `input`
  that only [match][match] the [regular expression][regex] pattern for letters from `a`-`z`.
- The function returns if the `size` of the `Set` is `26`.
  If the number of unique letters in the `Set` is equal to the `26` letters in the alphabet, then the function will return `true`.

## Shortening

When the body of a function is a single expression, the function can be implemented as an [arrow function][arrow-function], like so

```javascript
export const isPangram = (input) =>
  new Set(input.toLowerCase().match(/[a-z]/g)).size === 26;
```

Notice that `return` and the curly braces are not needed.

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
[tolowercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[match]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
