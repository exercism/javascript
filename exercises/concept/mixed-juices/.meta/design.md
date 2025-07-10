# Design

## Learning objectives

- What does a while loop do
- What is the difference to do-while
- Syntax `while(){}` and `do{} while()`
- Break and continue
- What is the switch statement
- Syntax `switch(){}`
- What is the `default` case for
- What does `break` do
- Why is break so important when using switch

## Out of Scope

The following topics are out of scope because they are covered by another concept exercise.

- For loops
- Array loops (for...in, forEach, map)

## Concepts

The Concepts this exercise unlocks are:

- `while-loops`
- `conditionals-switch`

## Prerequisites

- `comparison` for writing the condition in the loop header
- `conditionals` because they introduced the student to the concept of conditional execution
- `arrays` because they are used to loop over them in the exercise

## Analyzer

This exercise could benefit from the following rules in the [analyzer][analyzer].
The comment types mentioned below only serve as a proposal.

1. `timeToMixJuice`

   - `essential`: Verify the student used a switch statement.
     Would be nice if we could give different feedback depending on what the student used instead.
     If it was if-else, comment that switch is better suited for so many different variants.
     If an object was used, comment that this is nice but the goal is to practice switch.
   - `essential`: Verify that there are 5 cases and a default case in the switch statement to make sure the student did not tailor their code for the test cases (e.g., used more cases instead of default).
   - `actionable`: If the student used `break`, comment to use early `return`s instead to avoid assigning to a helper variable first and then returning that variable.
   - `celebratory`: Comment something nice when a student used grouped case statements.
     ```javascript
     case 'Energizer':
     case 'Green Garden':
        return 1.5;
     ```

2. `limesToCut`

   - A solution that uses `if (limes.length < 0) break;` instead of combining the conditions should be considered equally correct to the exemplar solution.
     The version in the exemplar file is shorter but the break version emphasizes that there is a special edge case.
   - `essential`: Verify that `while` was used.
   - `essential`: If a helper function was used for the switch statement, check that is was not exported.
   - `actionable`: If the student wrote `if (limes.length < 0) return limesCut`, comment that the duplication of `return limesCut` can be avoided by using break there instead of return.
   - `actionable`: Tell the student to use a helper function to wrap the switch statement for readability if he/she did not do that.
   - `informative`: If the student used a counter to iterate over the array, show a comment about about `shift`.
   - `informative`: Remind the student about `++` if it was not used to increment the lime counter.
   - `informative`: Check whether a shorthand assignment `+=` was used to increase the loop counter.
   - `informative`: If `default` was included in the switch statement, remind the student that it is optional and not needed in the scope of the task.
   - `celebratory`: Make a positive remark if the student used a helper function to wrap the switch statement.
   - `celebratory`: Celebrate if the student used `++` and `+=`.

3. `remainingOrders`

   - `essential`: Verify that do-while was used.
     If while was used instead, say that do-while is a better fit because there is always at least one iteration (because `timeLeft` is always > 0) and the condition can best be checked after running the code.
   - `essential`: Verify `timeToMixJuice` was reused instead of duplicating the code.
   - Most of the points from task 2 also apply here.
     Check what can be reused.

## Notes

The exercise is inspired by the [Master Mixologist Exercise in the Swift track][swift-master-mixologist].
The original exercise also included for loops which is covered by a different exercise in the JavaScript track.
The tasks were adapted accordingly which also simplified them.
The alcohol was replaced and the name was changed to match the new story.

## Improvement

The exercise would benefit from another task to practice `continue`.

[analyzer]: https://github.com/exercism/javascript-analyzer
[swift-master-mixologist]: https://github.com/exercism/swift/blob/main/exercises/concept/master-mixologist/.docs/instructions.md
