# Introduction

Many programs need (apparently) random values to simulate real-world events.

Common, familiar examples include:

- A coin toss: a random value from ('H', 'T').
- The roll of a die: a random integer from 1 to 6.
- Shuffling a deck of cards: a random ordering of a card list.
- The creation of trees and bushes in a 3-D graphics simulation.

Generating truly random values with a computer is a [surprisingly difficult technical challenge][why-randomness-is-hard], so you may see these results referred to as "pseudorandom".

## Generating random numbers

In Javascript, you can generate psuedorandom numbers using the [`Math.random()`][Math.random] function.
It will return a psuedorandom floating-point number between 0 (inclusive), and 1 (exclusive).

To get a random number between _min_ (inclusive) and _max_ (exclusive) you can use a function something like this:

```javascript
function getRandomInRange(min, max) {
  return min + Math.random() * (max - min);
}
getRandomInRange(4, 10);
// => 5.72
```

## Generating random integers

To generate a random integer, you can use `Math.floor()` or `Math.ceil()` to turn a randomly generated number into an integer.

```exercism/caution

The `Math.random()` function should NOT be used for security and cryptographic applications!!

Instead, you can use the Web Crypto API, which provides various cryptographic functions.
```

[why-randomness-is-hard]: https://www.malwarebytes.com/blog/news/2013/09/in-computers-are-random-numbers-really-random
[Math.random]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
