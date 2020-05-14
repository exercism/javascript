Elyse, magician-to-be, continues her training. She will be given several stacks of cards that she needs to perform her tricks.

To make things a bit easier, she only uses the cards 1 to 10.

### 1. Find the position of a card

Elyse wants to know the position (index) of a card in the stack

```javascript
const card = 2
getCardPosition([9, 7, 3, 2], card)
// => 3
```

### 2. Check for presence of a card

Elyse wants to determine if a card is present in the stack

```javascript
const card = 3
doesStackIncludesCard([2, 3, 4, 5], card)
// => true
```

### 3. Check if a stack only contains even numbers

Elyse wants to know if every card is even

```javascript
isEachCardEven([2, 4, 6, 7])
// => false
```

### 4. Check if a stack contains an odd number

Elyse wants to know if there is an odd number in the stack

```javascript
doesStackIncludesOddCard([3, 2, 6, 4, 8])
// => true
```

### 5. Find the first odd value

Elyse wants to know the value of the first card that is odd

```javascript
getFirstOddCard([4, 2, 8, 7, 9])
// => 7
```

### 6. Get the position of the first event card

Elyse wants to know the position of the first card that is even

```javascript
getFirstEvenCardPosition([5, 2, 3, 1])
// => 1
```
