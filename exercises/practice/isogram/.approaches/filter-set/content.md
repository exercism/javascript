# `filter` with `Set`

```javascript
export function isIsogram(string) {
  let word = [...string.toLowerCase()].filter(
    (letter) => letter >= 'a' && letter <= 'z',
  );
  return new Set(word).size == word.length;
}
```

With this approach you will instantiate a [`Set`][set] of the used letters and compare its [`size`][size] with the filtered word [`length`][length].

- First, the [lowercased][tolowercase] input string is made into an [Array][array] of its characters using [spread syntax][spread-syntax].
- The [`filter`][filter] method is then called on the `Array` to filter out any character that is not `a`-`z`.
- The letters that survive the filter are assigned to `word`.
- A `Set` is initialized from the letters in `word`.
  The `size` of unique letters is compared with the `length` of the filtered word `length`.

If the number of unique letters in the `Set` of used letters is the same as the number of filtered letters,
then the function returns true.

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[size]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
[length]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
[tolowercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[spread-syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
