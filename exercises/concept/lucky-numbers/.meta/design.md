# Design

## Learning objectives

- What is the difference between type conversion and type coercion
- Converting primitive types using the global functions `Boolean`, `Number` and `String`
- Pitfall: `String` on objects (pointer towards JSON)
- How to define the serialization behavior yourself
- When does type coercion happen (to boolean, to string or to number)
- Pitfalls of type coercion

## Out of Scope

The following topics should be covered in other concepts and are therefore not part of this concept exercise.

- Boxed vs. non-boxed primitives (could potentially become part of this concept in the future)
- `Date` conversions
- Details on JSON
- `new Function`
- Details on `parseInt` and `parseFloat`

Details on the conversion logic for loose equality are also out of scope as they are not required knowledge to write good code/ be fluent.

## Concepts

The Concept this exercise unlocks is:

- `type-conversion`

## Prerequisites

- `booleans`, `numbers`, `strings` because that is what we convert from and to
- `arrays` because they are needed in the exercise
- `null-undefined` because they are needed to understand how those values convert
