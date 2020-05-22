As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10.

## 1. Retrieve a card from a stack

Return the card at position `index` from the given stack.

```javascript
const index = 2
getItem([1, 2, 4, 1], index)
// => 4
```

## 2. Exchange a card in the stack

Exchange the card at position `index` with the new card provided and return the adjusted stack.
Note that this will also change the input slice which is ok.

```javascript
const index = 2
const newCard = 6
setItem([1, 2, 4, 1], index, newCard)
// => [1, 2, 6, 1]
```

## 3. Insert a card at the of top the stack

Insert new card at the top of the stack and return the stack.

```javascript
const newCard = 8
insertItemAtTop([5, 9, 7, 1], newCard)
// => [5, 9, 7, 1, 8]
```

## 4. Remove a card from the stack

Remove the card at position `index` from the stack and return the stack.

```javascript
const index = 2
removeItem([3, 2, 6, 4, 8], index)
// => [3, 2, 4, 8]
```

## 5. Remove the top card from the stack

Remove the card at the top of the stack and return the stack.

```javascript
removeItemFromTop([3, 2, 6, 4, 8])
// => [3, 2, 6, 4]
```

## 6. Insert a card at the bottom of the stack

Insert new card at the bottom of the stack and return the stack.

```javascript
const newCard = 8
insertItemAtBottom([5, 9, 7, 1], newCard)
// => [8, 5, 9, 7, 1]
```

## 7. Remove a card from the bottom of the stack

Remove the card at the bottom of the stack and return the stack.

```javascript
removeItemAtBottom([8, 5, 9, 7, 1])
// => [5, 9, 7, 1]
```

## 8. Check size of the stack

Check whether the size of the stack is equal a given `stackSize` or not.

```javascript
const stackSize = 4
checkSizeOfStack([3, 2, 6, 4, 8], stackSize)
// => false
```
