# Instructions

As a budding magician, Elyse needs to analyze her deck in lots of different ways.
To keep things simple, she only uses cards with values 1-10.

## 1. Determine how many cards of a certain type are in the deck

Elyse wants to know how many cards of a particular type she has in her deck.

Write a function `cardTypeCheck` that takes two parameters: an array of cards (Elyse's deck) and the type of card to count.
The function should use `forEach` and return the number of cards in the deck of the specified type.

```javascript
const cardType = 3;
cardTypeCheck([1, 2, 3, 4], cardType);
// => 1
```

## 2. Determine how many odd or even cards there are

For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function `determineOddEvenCards` that takes in two parameters: an array of cards (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').

This function should return a single number: the number of odd or even cards there are (depending on the value of the second argument) in the deck.
To practice, use a `for...of` loop in the function implementation this time.

```javascript
determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
// => 2

determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
// => 4
```
