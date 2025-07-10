# About

_Closures_ are a programming pattern in JavaScript that allows variables from an outer [lexical scope][wiki-lexical-scope] to be used inside of a nested block of code. JavaScript supports closures transparently, and they are often used without knowing what they are.

```javascript
// Top-level declarations are global-scope
const dozen = 12;

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  return dozen * n;
}
```

The name _closure_ is historically derived from [_λ-calculus_][wiki-lambda-calculus] and popularized by [_scheme_][wiki-scheme] ([source][wiki-closure]) to reference a function's open and closed variable bindings.

## Reasons to use closures in JavaScript

1. Data Privacy / Data Encapsulation

   - Unlike other languages, in 2020, there was no way to specify _private_ variables. So closures can be used to effectively emulate _private_ variables (there was a proposal to introduce private variable notation, which might have become standard by the time you read this).

   ```javascript
   // Consider this function:

   const saveNumber = (number) => {
     // The saved value is unaccessible by the outer lexical scope.
     const value = number;

     // We can provide access to the primitive value with a function, but the original will never change
     return () => value;
   };

   // Attempting to set the variable outside of its lexical scope results in an error
   value = 42;
   ```

2. Partial Application

   - Functions may return functions, and when a returned function uses the argument of the function that created it, this is an example of using a closure to perform partial application. Sometimes this is called _currying_ a function.

   ```javascript
   // The arguments are applied one-by-one, using closures to arrive at the final result
   function partialBuildUri(scheme) {
     return function (domain) {
       return function (path) {
         return `${scheme}://${domain}/${path}`;
       };
     };
   }

   // A function could apply them all at once.
   function buildUri(scheme, domain, path) {
     return partialBuildUri(scheme)(domain)(path);
   }

   // Or apply a few to create a flexible system of functions for reuse.
   function buildHttpsExercismUri(path) {
     return partialBuildUri('https')('exercism.org');
   }
   ```

## Lexical Scope for variables

In any programming language, **Closures** are closely related to variable scope. In JavaScript, there are 3 types of lexical scope for variables:

1. **Global-scope**: These are variables that are declared outside of functions and blocks.
1. **Function-scope**: These are variables declared within a function using the `var` keyword.
1. **Block-scope**: These are variables declared within a block (`{...}`) using the `let` and `const` keywords.

In practice, a closure often occurs when a function (or block) uses a variable from an outer scope. In JavaScript, this is supported transparently, so closures are often used without specific reference.

### Function-scope

The `var` keyword defines a **function-scoped** variable. This means that variables defined by `var` are available anywhere in the function where they are defined and any nested lexical scope (either **function** or **block**).

```javascript
{
  var five = 5;
}

// This will succeed because 'five' exists in the same scope
var tenTimes = five * 10;
```

### Block-scope

The `let` and `const` keywords define **block-scoped** variables. `let` defines a mutable variable, whose value may be set multiple times and may be defined but not initialized. `const` defines a variable which must be initialized when it is defined, and its value then may not change. If the `const` variable is set to a primitive value, it may not be mutated. If the `const` variable is set to a reference value, like an _array_ or _object_, the reference may not change but the array's contents may be mutated.

Consider this block:

```javascript
// 'two' is defined at the top-level, therefore available to the global-scope
const two = 2;

{
  // This succeeds, as 'two' is available from the outer lexical scope
  const oneLess = two - 1;
}

// This throws an error because oneLess is not defined outside of the previous inner lexical scope
console.log(oneLess);
```

While we can use braces (`{...}`) arbitrarily to create blocks, they are most often encountered surrounding _if-statements_, _functions_, and _classes_.

```javascript
const PI = 3.14;

// This function uses a closure for the value of PI (π)
function areaOfCircle(radius) {
  return PI * radius * radius;
}
```

[wiki-lexical-scope]: https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping
[what-the-fork-is-a-closure]: https://whatthefork.is/closure
[wiki-lambda-calculus]: https://en.wikipedia.org/wiki/%CE%9B-calculus
[wiki-scheme]: https://en.wikipedia.org/wiki/Scheme_(programming_language)
[wiki-closure]: https://en.wikipedia.org/wiki/Closure_(computer_programming)
