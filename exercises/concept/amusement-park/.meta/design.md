# Design

## Learning objectives

- What is `null`
- What is `undefined`
- When does `undefined` usually appear
- What is the difference between the two
- How to check for `null` or `undefined`
- Optional chaining
- Nullish Coalescing

## Out of Scope

- Default parameters (will be covered in the `functions` concept)
- Classes (will be covered in the `classes` concept)
- "Empty slots" in arrays

## Concepts

The Concepts this exercise unlocks are:

- `null-undefined`

## Prerequisites

- `objects` because they are needed throughout the exercise

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer].
The comment types mentioned below only serve as a proposal.

1. `createVisitor`

   - `actionable`: If the student used a helper variable, give feedback that the result can be returned directly.
   - `celebratory`: If the student used classes, celebrate but let them know it is not necessary throughout this exercise.
   - `informative`: If the student did not use the short-hand notation but wrote `name: name` etc instead, let them know how to shorten that.
     The solution should be accepted nevertheless.

2. `revokeTicket`

   - `essential`: Check the ticketId field is not deleted and re-added.
   - `celebratory`: If they used a method on a visitor class, celebrate but let them know it is not necessary for this exercise.

3. `ticketStatus`

   - `essential`: Using a type switch should be discouraged since it is confusing to read because of the `typeof null === 'object'` quirk.
   - `informative`: If the student did not use early returns, maybe let them know about this alternative.
   - `celebratory`: Congratulate if the student used a template string for the "sold" case
   - `celebratory`: Congratulate if the student used a `value` helper variable.

4. `simpleTicketStatus`

   - `essential`: Check `??` was used and not an if-statement or something else.
   - `actionable`: If the student used a helper variable, give feedback that the result can be returned directly.

5. `gtcVersion`
   - `essential`: Check only `.?` was used and not an if-statement or something else.
   - `essential`: Check that `undefined` is not returned "manually" via `return undefined`.
   - `actionable`: If the student used a helper variable, give feedback that the result can be returned directly.

## Notes

The exercise is inspired by the [Amusement Park Exercise in the Ruby track][ruby-amusement-park].
The original exercise also included parts of what is covered in `classes` in the JavaScript track.
So some tasks were removed.
Instead a task to practice the difference between null and undefined and tasks for nullish coalescing and optional chaining were added.

[analyzer]: https://github.com/exercism/javascript-analyzer
[ruby-amusement-park]: https://github.com/exercism/ruby/blob/main/exercises/concept/amusement-park/.docs/instructions.md
