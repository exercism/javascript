# Hints

## 1. Determine how many cards of a certain type are in the deck

- First, set up an integer variable to track the number of cards for the given type.
- Then as mentioned in the instructions, use [forEach][mdn-foreach] to iterate over the deck.
- Increase your counter variable in the callback when you find a card of the desired type.

## 2. Determine how many odd or even cards there are

- First, set up an integer variable to track the number of cards for the desired type (odd or even).
- Then as mentioned in the instructions, use [for...of][mdn-for-of] to iterate over the deck.
- The remainder when dividing by 2 tells you whether a number is odd or even.
  You can calculate the remainder using the [modulo operator][mdn-modulo] `%`.
- Increase your counter variable when you visit a number with the desired remainder.

[mdn-foreach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[mdn-for-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
[mdn-modulo]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
