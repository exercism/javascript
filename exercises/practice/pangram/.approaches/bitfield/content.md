# Bit field

```javascript
const A_LCASE = 97;
const A_UCASE = 65;
const ALL_26_BITS_SET = 67108863;

export function isPangram(input) {
  let phrasemask = 0;
  [...input].forEach((letter) => {
    if (letter >= 'a' && letter <= 'z')
      phrasemask |= 1 << (letter.charCodeAt(0) - A_LCASE);
    else if (letter >= 'A' && letter <= 'Z')
      phrasemask |= 1 << (letter.charCodeAt(0) - A_UCASE);
  });
  return phrasemask == ALL_26_BITS_SET;
}
```

This solution uses the [ASCII][ascii] value of the letter to set the corresponding bit position.

Some [const][const]ants are defined for readability in the function.
The ASCII value for `a` is `97`.
The ASCII value for `A` is `65`.
The value for all of the rightmost 26 bits being set is `67108863`.

- [Spread syntax][spread-syntax] is used to make an [`Array`][array] of the characters in the `input`.
- The `Array` method [`forEach`][foreach] loops through the characters and looks for a character being `a` through `z` or `A` through `Z`.
- If a letter is found, then its ASCII value is taken by the [`charCodeAt`][charcodeat] method.

<!-- prettier-ignore-start -->
~~~~exercism/note
`charCodeAt` actually returns the UTF-16 code unit for the character, which is an integer between `0` and `65535`.
For the letters `a`-`z` and `A`-`Z`, the UTF-16 number is the same value as the ASCII value.
~~~~
<!-- prettier-ignore-end -->

- If the lowercase letter is subtracted by `97`, then `a` will result in `0`, because `97` minus `97` equals `0`.
  `z` would result in `25`, because `122` minus `97` equals `25`.
  So `a` would have `1` [shifted left][shift-left] 0 places (so not shifted at all) and `z` would have `1` shifted left 25 places.
- If the uppercase letter is subtracted by `A`, then `A` will result in `0`, because `65` minus `65` equals `0`.
  `Z` would result in `25`, because `90` minus `65` equals `25`.
  So `A` would have `1` [shifted left][shift-left] 0 places (so not shifted at all) and `Z` would have `1` shifted left 25 places.

In that way, both a lowercase `z` and an uppercase `Z` can share the same position in the bit field.

So, for an integer, if the values for `a` and `Z` were both set, the bits would look like

```
      zyxwvutsrqponmlkjihgfedcba
00000010000000000000000000000001
```

We can use the [bitwise OR operator][or] to set the bit.
After the loop completes, the function returns if the `phrasemask` value is the same value as when all `26` bits are set, which is `67108863`.

[ascii]: https://www.asciitable.com/
[const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[spread-syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[foreach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[charcodeat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
[shift-left]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift
[or]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
