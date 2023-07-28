# Introduction

There are various idiomatic ways to solve Isogram.
You can use a regular expression pattern to match a duplicated letter.
Or you could use the `filter` method to populate a `Set` and compare the `size` of the `Set` with the `length` of the original phrase.

## General guidance

The key to solving Isogram is to determine if any of the letters in the `string` being checked are repeated.
A repeated letter means the `string` is not an Isogram.
The occurrence of the letter `a` and the letter `A` count as a repeated letter, so `Alpha` would not be an isogram.

## Approach: regular expression to match a duplicated letter

```javascript
export function isIsogram(word) {
  return !/([a-z]).*?\1/i.test(word);
}
```

For more information, check the [regex approach][approach-regex].

## Approach: `filter` with `Set`

```javascript
export function isIsogram(string) {
  let word = [...string.toLowerCase()].filter(
    (letter) => letter >= 'a' && letter <= 'z',
  );
  return new Set(word).size == word.length;
}
```

For more information, check the [`filter` with `Set` approach][approach-filter-set].

## Other approaches

Besides the aforementioned, idiomatic approaches, you could also approach the exercise as follows:

### Other approach: Bit field

Another approach can use a bit field to keep track of used letters.
For more information, check the [Bit field approach][approach-bitfield].

## Which approach to use?

Testing `"thumbscrew-Jappingly"` on [JSBench.me][jsbench-me]:

- The bit field approach was fastest.
- The regular expression to match a duplicated letter approach was about 55% slower.
- The `filter` with `Set` approach was about 66% slower.

[approach-regex]: https://exercism.org/tracks/javascript/exercises/isogram/approaches/regex-match-dupe
[approach-filter-set]: https://exercism.org/tracks/javascript/exercises/isogram/approaches/filter-set
[approach-bitfield]: https://exercism.org/tracks/javascript/exercises/isogram/approaches/bitfield
[jsbench-me]: https://jsbench.me/
