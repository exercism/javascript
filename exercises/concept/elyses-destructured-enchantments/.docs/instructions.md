# Instructions

Elyse, magician-to-be, continues her training.
She has a deck of cards she wants to manipulate.

To make things easier, she usually only starts with cards numbered 2 to 10, although some of the tricks may involve additional (face) cards.

<!-- prettier-ignore-start -->
~~~~exercism/note
There are **many** ways to shuffle the cards around, but to keep up the illusion of magic, it is vital that *no single method is used*, e.g. Elyse doesn't use `splice`, `slice`, `shift`, `unshift`, `push`, `at`.
The array accessor `array[index]` and object accessor (`object[key]` and `object.key`) are also never to be used.
~~~~
<!-- prettier-ignore-end -->

Want to help Elyse level up her magic?

<!-- prettier-ignore-start -->
~~~~exercism/advanced
Every function can be implemented using the parameters and a function body with a single `return expression`.
~~~~
<!-- prettier-ignore-end -->

## 1. Get the first card

Elyse will summon the first card in the deck without using the `array[index]`, `.at(index)`, or `.shift()`.
It's just like magic.

```javascript
const deck = [5, 9, 7, 1, 8];

getFirstCard(deck);
// => 5
```

## 2. Get the second card

Elyse performs sleight of hand and summons the second card in the deck without using the `array[index]` or `.shift()`.

```javascript
const deck = [3, 2, 10, 6, 7];

getSecondCard(deck);
// => 2
```

## 3. Swap two cards

Elyse will make the two cards of the deck switch places.
She doesn't need to call a single function.

```javascript
const deck = [10, 7];

swapTwoCards(deck);
// => [7, 10]
```

## 4. Shift three cards around

In order to perform some more sleight of hand, Elyse takes three cards and quickly moves the top card to the back, making the middle card the first card and the old bottom card the middle card.
She doesn't need to call a single function.

```javascript
const deck = [2, 6, 10];

shiftThreeCardsAround(deck);
// => [6, 10, 2]
```

## 5. Pick the named pile

Elyse will separate the deck into two piles.
She then asks the observer to pick one of the two piles, which we'll name `chosen`.
The `disregarded` pile is no longer relevant, which she makes disappear.
She doesn't need to call a single function.

```javascript
const deck = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

pickNamedPile({ chosen, disregarded });
// => [5, 4]
```

## 5. Swap the picked pile

Unfortunately the observer keeps picking the "wrong" pile, but with some clever fast magic, Elyse renames the `chosen` pile to be `disregarded` and the `disregarded` pile to be the `chosen` pile.
She doesn't need to call a single function.

```javascript
const deck = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

swapNamedPile({ chosen, disregarded });
// => { chosen: [7, 10], disregarded: [5, 4] }
```
