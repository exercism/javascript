# `every` with `includes` on lowercased letters

```javascript
export function isPangram(input) {
  const inputLowered = input.toLowerCase();
  return [...'abcdefghijklmnopqrstuvwxyz'].every((c) =>
    inputLowered.includes(c),
  );
}
```

- This begins by lowercasing the input by using the [`String`][string] [`toLowerCase`][tolower] method.
- It uses [spread syntax][spread-syntax] to make an [Array][array] out of a `string` of the alphabet.
- It then checks if all letters in the alphabet are contained in the input,
  using the `Array` method [`every`][every] with the `String` method [`includes`][includes].

If all letters of the alphabet are in the `input`, then the function returns `true`.

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[tolower]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[spread-syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
