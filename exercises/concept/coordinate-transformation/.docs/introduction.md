# Introduction

**Closures** are a programming pattern in JavaScript which allows variables from an outer [lexical scope][wiki-lexical-scope] to be used inside of a nested block of code.
JavaScript supports closures transparently, and they are often used without knowing what they are.

```javascript
// Top-level declarations are global-scope
const dozen = 12;

{
  // Braces create a new block-scope
  // Referencing the outer variable is a closure.
  const twoDozen = dozen * 2;
}

// Because of the block-scope declaration, twoDozen is not available here.
twoDozen;
// => Uncaught ReferenceError: twoDozen is not defined
```

Except for braces `{}`, functions (and classes) als create new scopes, which can _enclose_ values:

```javascript
const dozen = 12;

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  // This is declared inside the function scope, and uses the top-level scope.
  // This works, and encloses the value 12.
  const twoDozen = dozen * 2;

  // This only uses the locally declared variable and the passed argument to the parameter `n`
  return (twoDozen / 2) * n;
}

// Because of the function-scope declaration, twoDozen is not available here.
twoDozen;
// => Uncaught ReferenceError: twoDozen is not defined
```

As the `twoDozen` examples show, values can be enclosed in a _nested_ scope (function, block, etc.), but cannot be pulled out of that context.
In the majority of cases, it is intended in Modern JavaScript that a value does not _leak_ to an outside scope.

## Closures to save state and pass along values

Using a mutable variable declaration (like `let` or `var`) allows for some state to be preserved:

```javascript
let counter = 0;

// This function closure increments the counter's state in the outer lexical context.
// This way the counter can be shared between many calling contexts.
export function increment() {
  counter += 1;
  return counter;
}

increment();
// => 1

counter;
// => 1
```

## Enclosing values without leaking the state

Combining the two ideas: enclosing a value to preserve state, and enclosed values do not leak to the outside, it's possible to create private values.

The most common method is to make a function that returns a function which encloses some state.

```javascript
export function makeCounter() {
  let counter = 0;

  // This returns a new function that encloses the local variable counter
  return function increment() {
    counter += 1;
    return counter;
  };
}

// Counter did not leak
counter;
// => Uncaught ReferenceError: counter is not defined

// This creates a new counter.
// This assigns the increment function to the variable myFirstCounter.
const myFirstCounter = makeCounter();

typeof myFirstCounter;
// => function

myFirstCounter.name;
// => increment

myFirstCounter();
// => 1
myFirstCounter();
// => 2

// This creates new counter (with new, separate local state / enclosed counter variable)
const mySecondCounter = makeCounter();

mySecondCounter();
// => 1

// It does not affect the first counter.

myFirstCounter();
// => 3
```

```exercism/note
Many programmers find closures a hard concept, and returning a function from a function is not common or not even possible in all programming languages.
If you want more reading material, the [guide on MDN on Closures][mdn-closures] is quite comprehensive.

[mdn-closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
```

[wiki-lexical-scope]: https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping
