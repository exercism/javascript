As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10.

### 1. Retrieve a card from a stack

Return the card at position `index` from the given stack.

```javascript
const index = 2;
getItem([1, 2, 4, 1], index)
// => 4
```

### 2. Exchange a card in the stack

Exchange the card at position `index` with the new card provided and return the adjusted stack.
Note that this will also change the input slice which is ok.

```javascript
const index = 2;
const newCard = 6
setItem([1, 2, 4, 1], index, newCard)
// => [1, 2, 6, 1]
```

### 3. Create a stack of cards

Create a stack of given `length` and fill it with cards of the given `value`.

```javascript
const value = 8;
const length = 3;
prefilledSlice(value, length)
// => [8, 8, 8]
```

### 4. Remove a card from the stack

Remove the card at position `index` from the stack and return the stack.

```javascript
const index = 2;
removeItem([3, 2, 6, 4, 8], index)
// => [3, 2, 4, 8]
```

### 5. Remove the top card from the stack

Remove the card at the top of the stack and return the stack.

```javascript
removeItemFromTop([3, 2, 6, 4, 8])
// => [3, 2, 6, 4]
```

### 6. Check size of the stack

Check whether the size of the stack is equal a given `stackSize` or not.

```javascript
const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize)
// => false
```