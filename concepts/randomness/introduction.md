# Introduction

JavaScript provides a method on the Math object called `Math.random()` to create pseudo-random numbers.

Math.random will return a number between 0 (inclusive) and 1 (exclusive). This means that 0 is a possible result, while 1 is not. To be clear, we can express this range as 0 to 0.999999...

## How to create psuedo-random numbers

To demonstrate how to use this method, here is a simple function that employs it:

```javascript
function randomNumber() {
  return Math.random();
}
// => will return a number between 0 (inclusive) and 1 (exclusive)
```

## Creating pseudo-random integers

## Seeds

## Cryptographically secure random numbers

// Links
Why Randomness is hard
What pseudo-random numbers are
