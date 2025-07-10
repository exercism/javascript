# Design

## Learning objectives

- What are objects - for now describe them as maps/dictionaries that hold key-value pairs, more advanced things will be taught later
- How to create an object literal with `{}` (either empty or with some initial values)
- What keys are allowed
- What values are allowed (e.g., numbers, strings etc or other objects, arrays or even functions)
- How to add a key-value pair to an object, how to change the value of an existing key
- How to retrieve the value (show `obj["key"]` and `obj.key` notation)
- How to retrieve nested values
- How to remove an entry
- How to check a key exists in the object with `hasOwnProperty`
- How to iterate through the keys with `for...in`

## Out of Scope

- Prototypes and classes
- `this`
- Object destructering
- null and undefined (will be introduced in another concept exercise, including when they show up in the context of objects, it is a bit hard to tiptoe around this in this concept/exercise but the student can't learn everything at once)
- `new Object()` / `Object.create`
- Symbols as keys (should be covered in a separate concept)
- JSON (should be covered in a separate concept)
- "pass by reference" (will be introduced in the `functions` concept)
- optional chaining (will be introduced in the `null-undefined` concept)

## Concepts

The Concepts this exercise unlocks are:

- `objects`

## Prerequisites

- `for-loops` to better understand the `for...in` loop and because should already have covered some ground in the concept tree before starting with objects (e.g., arrays which are a prerequisite for `for-loops`)

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer]:

1. `createScoreBoard`

   - `essential`: Make sure no class, map etc. was created, there should be just an object.
   - `actionable`: If the student created an empty object first and then added the value, give feedback to include the entry in the object literal directly.
   - `actionable`: Check that the object was returned directly, no intermediate assignment to a variable necessary.

2. `addPlayer`

   - `essential`: Check the assignment operator was used and no additional variables were declared.

3. `removePlayer`

   - `essential`: Make sure `delete` was used and not set to undefined or null.
   - `actionable`: If there is additional code to check whether the key is present before deleting it, give feedback that this is not necessary.

4. `updateScore`

   - `actionable`: If the student used a separate variable to calculate the new value first, tell them it is not necessary.
   - `actionable`: If the student did not use the shorthand assignment operator, tell them about it. If they used it already, give a `celebratory` comment.

5. `applyMondayBonus`

   - `essential`: Check the student actually used `for...in`.
   - Same feedback as in `updateScore` applies.
   - Using `updateScore` in the solution should be treated as equally correct as the exemplar solution.

6. `normalizeScore`

   - `actionable`: No intermediate variables necessary.

## Notes

The exercise is inspired by the [High Score Board Exercise in the Swift track][swift-high-score].
Some tasks were removed because they did not fit the JavaScript version or our concept tree.
The last two tasks were added instead in this exercise.

## Improvement

There are still a couple of things open that could be added to the about.md file.

- Helper methods like `Object.assign`, `Object.defineProperty`, `Object.getOwnPropertyNames` etc.
- How to use an object as a map instead of a switch statement
- Object vs. Map
- See https://github.com/exercism/javascript/pull/1160#discussion_r654696799

Also the story in instructions.md could need some love, e.g.,

- Add names for the arcade hall, the game, the town.
- Maybe introduce a person instead of saying "you".
- Make sure all tasks relate back to the story.

[analyzer]: https://github.com/exercism/javascript-analyzer
[swift-high-score]: https://github.com/exercism/swift/blob/main/exercises/concept/high-score-board/.docs/instructions.md
