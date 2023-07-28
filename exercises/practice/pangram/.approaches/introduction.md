# Introduction

There are various idomatic approaches to Pangram.
You can use the `every` method with the `includes` method.
Or you can use the `Set` object with the `size` property.

## General guidance

The key to solving Pangram is determining if all of the letters in the alphabet are in the `string` being tested.
The occurrence of either the letter `a` or the letter `A` would count as the same letter.

## Approach: `every` with `includes`

```javascript
export function isPangram(input) {
  const inputLowered = input.toLowerCase();
  return [...'abcdefghijklmnopqrstuvwxyz'].every((c) =>
    inputLowered.includes(c),
  );
}
```

For more information, check the [`every` with `includes` approach][approach-every-includes].

## Approach: `Set` with `size`

```javascript
export function isPangram(input) {
  return new Set(input.toLowerCase().match(/[a-z]/g)).size === 26;
}
```

For more information, check the [`Set` with `size`approach][approach-set-size]

## Other approaches

Besides the aforementioned, idiomatic approaches, you could also approach the exercise as follows:

### Other approach: Bit field

Another approach can use a bit field to keep track of used letters.
For more information, check the [Bit field approach][approach-bitfield].

## Which approach to use?

Testing `"the _1_ quick brown fox jumps over the _2_ lazy dogs"` on [JSBench.me][jsbench-me]:

- The `every` with `includes` approach benched fastest.
- Although the bit field approach is often faster in other languages, it was about 45% slower.
- `Set` with `size` was about 75% slower.

[approach-every-includes]: https://exercism.org/tracks/javascript/exercises/pangram/approaches/every-includes
[approach-set-size]: https://exercism.org/tracks/javascript/exercises/pangram/approaches/set-size
[approach-bitfield]: https://exercism.org/tracks/javascript/exercises/pangram/approaches/bitfield
[jsbench-me]: https://jsbench.me/
