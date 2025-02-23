# Introduction

**Closures** are a programming pattern in JavaScript which allows variables from an outer  to be used inside of a nested block of code. JavaScript supports closures transparently, and they are often used without knowing what they are.

## Basic Closure Example

```javascript
// Top-level declarations are global-scope
const dozen = 12;

{
  // Braces create a new block-scope
  // Referencing the outer variable is a closure.
  const twoDozen = dozen * 2;
}

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  return dozen * n;
}
```

## Advanced Closure Example: Function Factories

```javascript
function createMultiplier(factor) {
  // `factor` is captured in the closure
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10 (uses closure-preserved `factor = 2`)
```

## Practical Example: Coordinate Transformer

```javascript
function createCoordinateTransformer(scaleX, scaleY) {
  // These parameters are preserved in the closure
  return function(x, y) {
    // This inner function uses both its arguments and the closure-preserved values
    return {
      x: x * scaleX,
      y: y * scaleY
    };
  };
}

// Create specialized transformers
const doubleScale = createCoordinateTransformer(2, 2);
const graphicScale = createCoordinateTransformer(1.5, 3);

console.log(doubleScale(10, 20));    // {x: 20, y: 40}
console.log(graphicScale(10, 20));   // {x: 15, y: 60}
```

## Closures to Save State and Pass Along Values

Using a mutable variable declaration (like `let` or `var`) allows for some state to be preserved:

```javascript
let counter = 0;

// This function closure increments the counter's state in the outer lexical context.
// This way the counter can be shared between many calling contexts.
export function increment() {
  counter += 1;
  return counter;
}
```

## Key Concepts to Remember

- Closures capture and preserve values from their outer scope.
- Functions can return other functions, creating specialized tools.
- Each closure maintains its own independent set of captured values.
- Arguments can be used both when creating and calling closure functions.
- Closures are excellent for creating reusable transformation functions.
- The captured values remain accessible even after the outer function has finished executing.
