# Introduction

Many programs need (pseudo-)random values to simulate real-world events.

Common, familiar examples include:

- A coin toss: a random value from ('H', 'T').
- The roll of a die: a random integer from 1 to 6.
- Shuffling a deck of cards: a random ordering of a card list.
- The creation of trees and bushes in a 3-D graphics simulation.

Generating truly random values with a computer is a [surprisingly difficult technical challenge][why-randomness-is-hard], which is why there are also "pseudorandom" generators.

<!-- prettier-ignore -->
~~~exercism/advanced
[The language specification][spec] for JavaScript doesn't force the implementation for random number generation.
All major browsers and JavaScript runtimes implement a PRNG (pseudo-random number generator).
Because the numbers are not cryptographically secure, they should never be used for anything that requires true or at least cryptographically secure random numbers, such as certificate or password generation or operations.

There is a standard called [Web Cryptography][rfc] which standardizes an interface for doing cryptography in JavaScript.
It is implemented [by Browsers][crypto-web] as well as runtimes such as [Node.JS][crypto-node] and [Deno][crypto-deno].

This concept is not about Web Crypto and will restrict itself to pseudo-random number generation.

[rfc]: https://www.w3.org/TR/webcrypto-2/
[spec]: https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.random
[crypto-web]: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
[crypto-node]: https://nodejs.org/api/webcrypto.html#cryptogetrandomvaluestypedarray
[crypto-deno]: https://docs.deno.com/api/web/~/Crypto
~~~

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

<!-- prettier-ignore -->
~~~exercism/advanced
Most simple techniques of returning a range of numbers based on the randomly generated number [will introduce bias][bias].
That means that some numbers will be more likely to be rolled than others.
Using the multiplication technique spreads out the bias over the entire range, so it will be less obvious and in most cases not a big issue, but you should be aware of this.

[bias]: https://adammil.net/blog/v134_Efficiently_generating_random_numbers_without_bias.html
~~~

## Generating random integers

To generate a random integer, you can use `Math.floor()` or `Math.ceil()` to turn a randomly generated number into an integer.

[why-randomness-is-hard]: https://www.malwarebytes.com/blog/news/2013/09/in-computers-are-random-numbers-really-random
[Math.random]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
